import { Router } from "express";
import {createCustomer , getCustomersById , getCustomers , updateCustomer} from "../controllers/customers.cotrollers.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import {customerSchema} from "../schemas/customers.schemas.js"

const customersRouter = Router()

customersRouter.get("/customers" , getCustomers)
customersRouter.get("/customers/:id" , getCustomersById)
customersRouter.post("/customers" , validateSchema(customerSchema) , createCustomer)
customersRouter.put("/customers:id" , validateSchema(customerSchema), updateCustomer)

export default customersRouter