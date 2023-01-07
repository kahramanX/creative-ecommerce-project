import UserAddressModel from "../Models/UserAddressModel";
import { Request, Response } from "express";
import * as yup from "yup";

export const createUserAddress = (req: Request, res: Response) => {
  const {
    address_line_1,
    address_line_2,
    country,
    city,
    district,
    postal_code,
    address_phone,
  } = req.body;

  const { userID } = req.params;

  // User Address Schema created for schema validation
  const userAddressSchema = yup.object({
    address_line_1: yup.string().max(200).required().trim(),
    address_line_2: yup.string().max(200).required().trim(),
    country: yup.string().max(30).required().trim(),
    city: yup.string().max(30).required().trim(),
    district: yup.string().max(30).required().trim(),
    postal_code: yup.string().max(10).required().trim(),
    address_phone: yup.string().max(10).required().trim(),
  });

  // User Address Schema Validation
  userAddressSchema
    .isValid(req.body)
    .then((isValid) => {
      if (isValid) {
        // user Addres Created
        UserAddressModel.create({
          address_line_1,
          address_line_2,
          country,
          city,
          district,
          postal_code,
          address_phone,
          UserModelUserId: userID,
        })
          .then(() => {
            res.json({ status: true });
          })
          .catch(() => {
            res.json({ status: false });
          });
      } else {
        res.json({ status: false, message: "form_error" });
      }
    })
    .catch(() => {
      res.json({
        status: false,
      });
    });
};

export const deleteUserAddress = (req: Request, res: Response) => {
  const { userID } = req.params;

  UserAddressModel.destroy({
    where: {
      UserModelUserId: userID,
    },
  })
    .then((willBeDeletedUserAddress) => {
      if (willBeDeletedUserAddress != 0) {
        res.json({ status: true });
      } else {
        res.json({ status: false, message: "no_user_address" });
      }
    })
    .catch(() => {
      res.json({
        status: false,
      });
    });
};

export const getUserAddressInfos = (req: Request, res: Response) => {
  const { userID } = req.params;

  UserAddressModel.findOne({ where: { UserModelUserId: userID } }).then(
    (userAddressInfos) => {
      if (userAddressInfos) {
        res.json({ status: true, data: userAddressInfos });
      } else {
        res.json({ status: false, message: "no_user_address" });
      }
    }
  );
};
