const Catalog = require("../models/Catalog");
const Product = require("../models/Product");

const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addCategory = (req, res, next) => {
  Catalog.findOne({ id: req.body.id }).then(category => {
    if (category) {
      return res
        .status(400)
        .json({ message: `Category with id "${category.id}" already exists` });
    } else {
      const newCategory = new Catalog(queryCreator(req.body));

      newCategory
        .save()
        .then(category => res.json(category))
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.aupdateCategory = (req, res, next) => {
  Catalog.findOne({ id: req.params.id })
    .then(category => {
      if (!category) {
        return res.status(400).json({
          message: `Category with id "${req.params.id}" is not found.`
        });
      } else {
        const oldCategoryName = category.name
        const initialQuery = _.cloneDeep(req.body);
        const updatedCategory = queryCreator(initialQuery);

        Catalog.findOneAndUpdate(
          { id: req.params.id },
          { $set: updatedCategory },
          { new: true }
        )
          .then(category => {
            if (oldCategoryName !== updatedCategory.name) {

              const catalogName = 'categories';

              Product.find({ [catalogName]: oldCategoryName })
                .then(products =>  {
                  if (products && products.length > 0) {
                    for (const { _id } of products) {
                      Product.findOneAndUpdate(
                        { _id },
                        { [catalogName]:  updatedCategory.name},
                        { new: true }
                      )
                        .then(product => console.log('Product category updated'))
                        .catch(err =>
                          res.status(400).json({
                            message: `Error happened on server: "${err}" `
                          })
                        );
                    }
                  }
                })
                .catch(err =>
                  res.status(400).json({
                    message: `Error happened on server: category name update for product: "${err}" `
                  })
                )
            }
            res.json(category)
          })
          .catch(err =>
            res.status(400).json({
              message: `Error happened on server: catalog update "${err}" `
            })
          );
      }
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.deleteCategory = (req, res, next) => {
  Catalog.findOne({ id: req.params.id }).then(async category => {
    if (!category) {
      return res.status(400).json({
        message: `Category with id "${req.params.id}" is not found.`
      });
    } else {
      const categoryToDelete = await Catalog.findOne({ id: req.params.id });

      Catalog.deleteOne({ id: req.params.id })
        .then(deletedCount =>
          res.status(200).json({
            message: `Category witn id "${categoryToDelete.id}" is successfully deleted from DB.`,
            deletedCategoryInfo: categoryToDelete
          })
        )
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.getCategories = (req, res, next) => {
  Catalog.find()
    .then(catalog => res.send(catalog))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getCategory = (req, res, next) => {
  Catalog.findOne({ id: req.params.id })
    .then(category => {
      if (!category) {
        return res.status(400).json({
          message: `Category with id "${req.params.id}" is not found.`
        });
      } else {
        res.status(200).json(category);
      }
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
