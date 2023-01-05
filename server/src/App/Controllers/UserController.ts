import UserModel from "../Models/UserModel";
import { Request, Response } from "express";
import * as yup from "yup";

export const createUser = (req: Request, res: Response) => {
  const { first_name, last_name, password, email, phone } = req.body;

  // User Schema created for schema validation
  const userSchema = yup.object({
    first_name: yup.string().max(30).required().trim(),
    last_name: yup.string().max(30).required().trim(),
    password: yup.string().max(30).required().trim(),
    email: yup.string().max(50).email().required().trim(),
    phone: yup.string().max(10).required().trim(),
  });

  // User Schema Validation
  userSchema.isValid(req.body).then((isValid) => {
    if (isValid) {
      // Find already registered user from email
      UserModel.findAll({ where: { email: email } })
        .then((userEmail) => {
          if (userEmail.length == 0) {
            // User Created
            UserModel.create({
              first_name,
              last_name,
              password,
              email,
              phone,
            })
              .then(() => {
                res.json({
                  status: true,
                });
              })
              .catch(() => {
                res.json({
                  status: false,
                });
              });
          } else {
            res.json({
              status: false,
              message: "user_already_registered",
            });
          }
        })
        .catch(() => {
          res.json({
            status: false,
          });
        });
    } else {
      res.json({
        status: false,
      });
    }
  });
};

export const loginUser = (req: Request, res: Response) => {
  const { email, password } = req.body;

  UserModel.findOne({
    where: {
      email: email,
      password: password,
    },
  }).then((loggedUser) => {
    console.log("loggedUser", loggedUser);

    // User Schema created for schema validation
    const userSchema = yup.object({
      email: yup.string().max(50).email().required().trim(),
      password: yup.string().max(30).required().trim(),
    });

    // User Schema Validation
    userSchema.isValid(req.body).then((isValid) => {
      if (isValid) {
        if (loggedUser) {
          res.json({ status: true, data: loggedUser });
        } else {
          res.json({ status: false, message: "false_email_or_password" });
        }
      } else {
        res.json({ status: false });
      }
    });
  });
};
