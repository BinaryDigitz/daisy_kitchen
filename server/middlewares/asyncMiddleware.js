
export function asyncMiddleware (handle){
    return async ( req, res, next) =>{
        try{ 
            handle(req, res);
        }
        catch(ex){
            next(ex);
        }
    }
};