const Task = require('../model/taskModule')

const taskController = {
    index: async (req,res)=>{
        const taskList = await Task.find({})
        // console.log('tasklist =',taskList)
        res.render('index',{ tasks: taskList})
    },
    new: async (req,res)=>{
        res.render('create')
    },
    edit: async (req,res)=>{
        const id = req.params.id // to read ref id from router

        const data = await Task.findById( {_id: id})
        //console.log('single data', data)

        res.render('update',{task: data})
    },
    createTask: async (req,res)=>{

        //console.log("my data = ",req.body)
        
        const {title,content,start,end,user} = req.body
        const newTask = Task({title, content, start, end, user})

        //console.log("my data = ",newTask)
        newTask.save()
        console.log('task created successfully')
        res.redirect(`/`)
    },
    updateTask: async (req,res)=>{
        const data = req.body
       // console.log('update data = ', data)
       await Task.findByIdAndUpdate({ _id: req.params.id }, data)
       console.log('updated')
        res.redirect(`/`)
    },
    deleteTask: async (req, res)=>{
        const id = req.params.id
        await Task.findByIdAndDelete({ _id: id})
        console.log("deleted success");
        res.redirect(`/`)
    }
}

module.exports = taskController