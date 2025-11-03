import { Activity } from "../models/activity.js";
import {
  createPriceInEuro,
  createPriceInCents,
  createSlug,
} from "../helpers/activity-views.js";
import { CustomError } from "../helpers/custom-error.js";
import { validationResult as getValidationResult } from "express-validator";

export const renderAllActivitiesPage = async (request, response) => {
  try {
    const activities = await Activity.find({}).exec();

    return response.render("activities/index", {
      activities,
      createPriceInEuro,
    });
  } catch (error) {
    console.error(error);

    return response.render("error", {
      message: "Something went wrong while loading the activities.",
    });
  }
};

export const renderAddNewActivityPage = (request, response) => {
  return response.render("activities/new", {
    formData: null,
    errorMessages: null,
  });
};

export const createNewActivity = async (request, response) => {
  try {
    const formData = request.body;
    const validationResult = getValidationResult(request);

    if (!validationResult.isEmpty()) {
      const errors = validationResult.array();
      const errorMessages = errors.map((error) => error.msg);

      return response.render("activities/new", { formData, errorMessages });
    }

    const slug = createSlug(formData.name, formData.venue);
    const priceInCents = createPriceInCents(formData.price);

    const activity = new Activity({
      slug: slug,
      name: formData.name,
      venue: formData.venue,
      description: formData.description,
      price: priceInCents,
    });

    await activity.save();

    if (!activity) throw new CustomError("Could not create the activity.");

    return response.redirect("/activities");
  } catch (error) {
    console.error(error);

    if (error instanceof CustomError)
      return response.render("error", { message: error.message });

    return response.render("error", {
      message: "Something went wrong while creating the activity.",
    });
  }
};

export const renderActivityPage = async (request, response) => {
  try {
    const slug = request.params.slug;
    const activity = await Activity.findOne({ slug: slug }).exec();

    if (!activity) throw new CustomError("Could not find the activity.");

    const price = createPriceInEuro(activity.price);

    return response.render("activities/activity", {
      activity: { ...activity.toJSON(), price },
    });
  } catch (error) {
    console.error(error);

    if (error instanceof CustomError)
      return response.render("error", { message: error.message });

    return response.render("error", {
      message: "Something went wrong while loading the activity.",
    });
  }
};

export const updateActivity = async (request, response) => {
  try {
    const formData = request.body;
    const oldSlug = request.params.slug;
    const validationResult = getValidationResult(request);

    if (!validationResult.isEmpty()) {
      const errors = validationResult.array();
      const errorMessages = errors.map((error) => error.msg);

      return response.render("activities/edit", {
        formData: { ...formData, slug: oldSlug },
        errorMessages,
      });
    }

    const newSlug = createSlug(formData.name, formData.venue);
    const priceInCents = createPriceInCents(formData.price);

    const activity = await Activity.findOneAndUpdate(
      { slug: oldSlug },
      {
        slug: newSlug,
        name: formData.name,
        venue: formData.venue,
        description: formData.description,
        price: priceInCents,
      },
      {
        new: true,
      }
    );

    if (!activity) throw new CustomError("Could not find the activity.");

    return response.redirect(`${activity.slug}`);
  } catch (error) {
    console.error(error);

    if (error instanceof CustomError)
      return response.render("error", { message: error.message });

    return response.render("error", {
      message: "Something went wrong while updating the activity.",
    });
  }
};

export const renderEditActivityPage = async (request, response) => {
  try {
    const slug = request.params.slug;
    const activity = await Activity.findOne({ slug: slug }).exec();

    if (!activity) throw new CustomError("Could not find the activity.");

    const price = createPriceInEuro(activity.price);

    return response.render("activities/edit", {
      formData: { ...activity.toJSON(), price },
      errorMessages: null,
    });
  } catch (error) {
    console.error(error);

    if (error instanceof CustomError)
      return response.render("error", { message: error.message });

    return response.render("error", {
      message: "Something went wrong while fetching the activity data.",
    });
  }
};

export const deleteActivity = async (request, response) => {
  try {
    const slug = request.params.slug;
    const deletedActivity = await Activity.findOneAndDelete({ slug: slug });

    if (!deletedActivity) throw new CustomError("Could not find the activity.");

    return response.redirect("/activities");
  } catch (error) {
    console.error(error);

    if (error instanceof CustomError)
      return response.render("error", { message: error.message });

    return response.render("error", {
      message: "Something went wrong while deleting the activity.",
    });
  }
};
