import app from './app';

import dotenv from 'dotenv';

dotenv.config({ path: "config/config.env" })





app.get('/', (req, res) => {

    res.status(200).json({
        success: true,
        message: "Server is working fine"
    })
})



app.listen(process.env.PORT, () => {

    console.log(`server is listening on ${process.env.PORT}`)
})
