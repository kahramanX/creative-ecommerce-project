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
  userSchema
    .isValid(req.body)
    .then((isValid) => {
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
    })
    .catch(() => {
      res.json({
        status: false,
        message: "form_error",
      });
    });
};

export const loginUser = (req: Request, res: Response) => {
  const { email, password } = req.body;

  // User Schema created for schema validation
  const userLoginSchema = yup.object({
    email: yup.string().max(50).email().required().trim(),
    password: yup.string().max(30).required().trim(),
  });

  UserModel.findOne({
    where: {
      email: email,
      password: password,
    },
  })
    .then((loggedUser) => {
      // User Schema Validation
      userLoginSchema
        .isValid(req.body)
        .then((isValid) => {
          if (isValid) {
            // if loggedUser return null, there is no user
            if (loggedUser) {
              res.json({ status: true, data: loggedUser });
            } else {
              res.json({ status: false, message: "false_email_or_password" });
            }
          } else {
            res.json({ status: false });
          }
        })
        .catch(() => {
          res.json({
            status: false,
            message: "form_error",
          });
        });
    })
    .catch(() => {
      res.json({
        status: false,
      });
    });
};

export const getUserInfos = (req: Request, res: Response) => {
  const { userID } = req.params;

  UserModel.findOne({ where: { user_id: userID } }).then((userInfos) => {
    if (userInfos) {
      res.json({ status: true, data: userInfos });
    } else {
      res.json({ status: false, message: "no_user" });
    }
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const { userID } = req.params;

  UserModel.destroy({
    where: {
      user_id: userID,
    },
  })
    .then((willBeDeletedUser) => {
      if (willBeDeletedUser != 0) {
        res.json({ status: true });
      } else {
        res.json({ status: false, message: "no_user" });
      }
    })
    .catch(() => {
      res.json({
        status: false,
      });
    });
};

export const updateUser = (req: Request, res: Response) => {
  const { userID } = req.params;
  const { first_name, last_name, email, password, phone } = req.body;

  // I cannot add this schema. Because, the schema and Sequelize have concflict
  /*   // User Update Schema created for schema validation
  const userUpdateSchema = yup.object({
    first_name: yup.string().max(30).required().trim(),
    last_name: yup.string().max(30).required().trim(),
    password: yup.string().max(30).required().trim(),
    email: yup.string().max(50).email().required().trim(),
    phone: yup.string().max(10).required().trim(),
  }); */

  UserModel.update(
    { first_name, last_name, email, password, phone },
    { where: { user_id: userID } }
  )
    .then((willBeUpdatedUser: any) => {
      if (willBeUpdatedUser != 0) {
        res.json({ status: true });
      } else {
        res.json({ status: false, message: "updated_user_error" });
      }
    })
    .catch(() => {
      res.json({
        status: false,
      });
    });
};
