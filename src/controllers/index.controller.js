import { pool } from "../db.js"



export const ping = async(req,res)=>{
    const [result] = await pool.query('SELECT "PONG" AS result')
    res.json(result[0])
}

export const inicio = async(req,res)=>{
    const [rows] = await pool.query('SELECT * FROM contacto')
    res.render('index',{data:rows});
}

export const add = async(req,res)=>{
    const {nombre,telefono,email,hogar,direccion} = req.body
    const [rows] = await pool.query('INSERT INTO contacto (nombre,telefono,email,hogar,direccion) VALUES (?,?,?,?,?)',[nombre,telefono,email,hogar,direccion])

    res.redirect('/')
}

export const borrar = async(req,res)=>{
    const {contactoID} = req.body
    const [rows] = await pool.query('DELETE FROM contacto WHERE id =(?)',[contactoID])
    res.redirect('/');
}

export const actualizar = async(req,res)=>{
    const {nombre,telefono,email,hogar,direccion,contactoID} = req.body
    const [rows] = await pool.query('UPDATE contacto SET nombre=(?),telefono =(?),email=(?),hogar=(?),direccion=(?) WHERE id = (?) ',[nombre,telefono,email,hogar,direccion,contactoID])
    res.redirect('/');
}