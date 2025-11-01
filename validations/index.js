import { body } from "express-validator";

export const nameValidationChain = body("name")
  .trim()
  .notEmpty()
  .withMessage(
    "Activity name is required. Please enter the name of the activity."
  )
  .bail()

  .isString()
  .withMessage("Activity name has to be a string.")
  .bail()

  .isLength({ min: 3 })
  .withMessage(
    "Activity name is too short. Please enter at least 3 characters."
  )
  .bail()

  .isLength({ max: 96 })
  .withMessage(
    "Activity name is too long. Please enter no more than 96 characters."
  )
  .bail()

  .matches(/^[A-Za-z0-9.,!?:;\-\(\) ]+$/)
  .withMessage(
    "Activity name contains invalid characters. Please use only letters, numbers and basic punctuation."
  );

export const venueValidationChain = body("venue")
  .trim()
  .notEmpty()
  .withMessage("Venue name is required. Please enter the name of the venue.")
  .bail()

  .isString()
  .withMessage("Venue name has to be a string.")
  .bail()

  .isLength({ min: 3 })
  .withMessage("Venue name is too short. Please enter at least 3 characters.")
  .bail()

  .isLength({ max: 96 })
  .withMessage(
    "Venue name is too long. Please enter no more than 96 characters."
  )
  .bail()

  .matches(/^[A-Za-z0-9.,!?:;\-\(\) ]+$/)
  .withMessage(
    "Venue name contains invalid characters. Please use only letters, numbers and and basic punctuation."
  );

export const descriptionValidationChain = body("description")
  .trim()
  .notEmpty()
  .withMessage(
    "Description is required. Please enter a short description about the activity."
  )
  .bail()

  .isString()
  .withMessage("Description has to be a string.")
  .bail()

  .isLength({ min: 96 })
  .withMessage("Description is too short. Please enter at least 96 characters.")
  .bail()

  .isLength({ max: 1024 })
  .withMessage(
    "Description is too long. Please enter no more than 1024 characters."
  )
  .bail()

  .matches(/^[A-Za-z0-9.,!?:;\-\(\) ]+$/)
  .withMessage(
    "Description contains invalid characters. Please use only letters, numbers and basic punctuation."
  );

export const priceValidationChain = body("price")
  .trim()
  .notEmpty()
  .withMessage("Price is required. Please enter the price of the activity.")
  .bail()

  .isFloat()
  .withMessage("Price must be a number")
  .bail()

  .isFloat({ min: 0 })
  .withMessage("Price cannot be negative.")
  .bail()

  .isFloat({ min: 1 })
  .withMessage("Price must be at least 1.00€.")
  .bail()

  .isFloat({ max: 1000 })
  .withMessage("Price cannot be greater than 1000.00€.")

  .matches(/^\d+(\.\d{1,2})?$/)
  .withMessage("Price can have up to two decimal places.")
  .bail();
