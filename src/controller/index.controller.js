const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    port:'5432',
    user:'postgres',
    password:'changeme',
    database:'api'
})


const getUsers = async (req,res) =>{
    const response = await pool.query('Select * from users')
    res.status(200).json(response.rows)
}

const createUser = async (req,res) =>{
    const {name,email} = req.body
    const response = await pool.query('INSERT INTO users(name,email) VALUES($1,$2)',[name,email])
    res.status(200).json({
        message:'User Added',
        body: {
            user:{name,email}
        }
    })
}

const getUser = async (req,res) =>{
    const id = req.params.id
    const response = await pool.query(`Select * from users where id='${id}'`)
    res.status(200).json(response.rows)
}

const deleteUser = async (req,res) =>{
    const id = req.params.id
    const response = await pool.query(`DELETE from users WHERE id=${id}`)
    res.json(`User ${id} deleted`)
}

module.exports = {
    getUsers,
    createUser,
    getUser,
    deleteUser
}