const TodoTask = require("../models/ToDoModel"); 

// --------------------- create List ---------------------------------
exports.createList = async(req, res, next) => {
    try {
        const todoTask = new TodoTask({
            content: req.body.content
        });
        await todoTask.save();
        res.redirect("/");
        next
    } catch (error) {
        res.redirect("/");
        next(error);
    }
};


// --------------------------- delete list ---------------------------------
exports.deleteList = async(req, res, next) => {
    try {
        const update = await TodoTask.findOneAndUpdate({content: req.body.content}, 
            {$set: {isDeleted: true, deletedAt: new Date()}}, {new: true});
        await update.save();
        res.redirect("/");
        next
    } catch (error) {
        res.redirect("/");
        next(error);
    }
};

