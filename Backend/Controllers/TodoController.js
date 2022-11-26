const {validationResult} = require("express-validator");
const TodoModel = require("./../Models/TodoModel")




module.exports.AddTodo = (request, response, next)=>{
    let result = validationResult(request)
    if(!result.isEmpty())
    {
        let message = result.array().reduce((current, error)=>current+error.msg+", ", " ")
        let err = new Error(message);
        err.status = 422;
        throw err;
    }
    let ToDo = new TodoModel({
        Task:request.body.Task,
        User:request.body.User
    })
    ToDo.save()
    .then(data=>{
        response.status(200).json({message:"ToDo added", data})
    })
    .catch(error=>next(error))
}
module.exports.UpdateTodo = (request, response, next)=>{
    let result = validationResult(request)
    if(!result.isEmpty())
    {
        let message = result.array().reduce((current, error)=>current+error.msg+", ", " ")
        let err = new Error(message);
        err.status = 422;
        throw err;
    }
    TodoModel.findOneAndUpdate({_id:request.body.Id, User:request.body.User}, {$set:{Task:request.body.Task}})

    .then(data=>{
        response.status(200).json({message:"Todo updated", data})
    })
    .catch(error=>{
            next(error)
        })
}
module.exports.DeleteTodo = (request, response, next)=>{
    console.log(request.params.id);
    console.log(request.query);
    TodoModel.deleteOne({_id:request.params.id, User:request.query.User})

    .then(data=>{
        response.status(200).json({message:"Todo Deleted", data})
    })
    .catch(error=>{
            next(error)
        })
}
module.exports.getTodos = (request, response, next)=>{
    console.log(request.params.user);
    TodoModel.find({User:request.params.user})
    .then(data=>{
        response.status(200).json({message:"Todo for Specific user", data})
    })
    .catch(error=>{
            next(error)
        })
}
//func5
module.exports.getTodo = (request, response, next)=>{
    console.log(request.query.id);
    console.log(request.query.user);
    TodoModel.find({_id:request.query.id, User:request.query.user})
    .then(data=>{
        console.log(data)
        response.status(200).json({message:"Specific Todo for a Specific user", data})
    })
    .catch(error=>{
            next(error)
        })
}