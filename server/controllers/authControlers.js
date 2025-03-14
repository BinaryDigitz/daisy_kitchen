import User from '../models/user.model.js'
import { NODE_ENV } from '../config/env.js'
import bcrypt from 'bcrypt';
import { validateSignup, validateLogin } from '../utils/inputValidation.js'
import { asyncMiddleware } from '../middlewares/asyncMiddleware.js'


// SIGNUP
export const signup = asyncMiddleware(async (req, res, next) => {
    const { error } = validateSignup(req.body)
    // handle wrong user input
    if (error) return res.json({ success: false, statusCode: 400, message: error.details[0].message })

    const { fullName, email, phone, password } = req.body

    // check if user exist in the database
    let existingUser = await User.findOne({ email })
    if (existingUser) return res.json({ success: false, statusCode: 400, message: 'User already exist.' })

    // User doest not exist
    // Hash user password
    const hashedPassword = await bcrypt.hash(password, 10)
    let user = await User.create({ fullName, email, phone, password: hashedPassword })
    await user.save()

    // Generate a token using the token method stored in the database
    const token = user.generateToken()

    // Send token as cookie
    return res.cookie('daisy_token', token, {
        httpOnly: true,
        secure: NODE_ENV === 'production'
    })
        .json({
            success: true,
            statusCode: NODE_ENV === 'development' ? 201 : 200,
            message: NODE_ENV === 'development' ? ' User logged in successfully' : 'Successful Login',
        })
});


// LOGIN
export const login = asyncMiddleware(async (req, res) => {
    const { error } = validateLogin(req.body);
    if (error) return res.json({ success: false, statusCode: 400, message: error.details[0].message })

    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.json({
        success: false,
        statusCode: NODE_ENV === 'development' ? 404 : 400,
        message: NODE_ENV === 'development' ? ' Incorrect email.' : 'Incorrect email or password',
    });

    const hashedPassword = await bcrypt.compare(password, user.password)
    if (!hashedPassword) return res.json({
        success: false,
        statusCode: NODE_ENV === 'development' ? 404 : 400,
        message: NODE_ENV === 'development' ? ' Incorrect password.' : 'Incorrect email or password',
    });

    // Everything is find. user has the correct detail, generate token
    const token = user.generateToken()
    return res.cookie('daisy_token', token, {
        httpOnly: true,
        secure: NODE_ENV === 'production'
    })
        .json({
            success: true,
            statusCode: NODE_ENV === 'development' ? 201 : 200,
            message: NODE_ENV === 'development' ? ' User logged in successfully' : 'Successful Login',
        })

});


// SIGNUP OR LOGIN WITH GOOGLE
export const google = asyncMiddleware(async (req, res) => {
    const { fullName, email, phone, photo } = req.body
    let existUser = await User.findOne({ email })
    
    if (existUser) {
        const token = existUser.generateToken()
        const { password: pass, ...rest } = existUser._doc

        return res.cookie('daisy_token', token, {
            httpOnly: true,
            secure: NODE_ENV === 'production'
        })
            .json({
                user: rest,
                success: true,
                statusCode: NODE_ENV === 'development' ? 201 : 200,
                message: NODE_ENV === 'development' ? ' Accounted created with google successfully. ' : 'Account created successfully',
            });
    }
    else {
        // Generate a 8 chars random password made up of strings and numbers
        const generatedPassword = Math.random().toString(36).slice(-8)
        const hashedPassword = await bcrypt.hash(generatedPassword, 10)

        let user = new User({ fullName, email, phone, photo, password: hashedPassword })
        await user.save()

        const { password: pass, ...rest } = user._doc

        const token = user.generateToken()
        return res.cookie('daisy_token', token, {
            httpOnly: true,
            secure: NODE_ENV === 'production'
        })
            .json({
                user: rest,
                success: true,
                statusCode: NODE_ENV === 'development' ? 201 : 200,
                message: NODE_ENV === 'development' ? ' User logged in successfully' : 'Successful Login',
            });

    }
})















