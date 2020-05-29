/*jshint esversion: 8 */
const PlansService = require("../services/PlansService");

class PlansController {

    async index(req, res) {
        let plans = await PlansService.getAll();
        //res.json(plans);
        res.render("./plans/index", {
            plans
        });
    }

    create(req, res) {
        res.render("./plans/create", {
            title_msg: req.flash('title_msg'),
            list_msg: req.flash('list_msg')
        });
    }

    async edit(req, res) {
        let plan = await PlansService.getById(req.params.id);
        res.render("./plans/edit", {
            plan,
            title_msg: req.flash('title_msg'),
            list_msg: req.flash('list_msg')
        });
    }

    async update(req, res) {
        let {
            title,
            list,
            client,
            value,
            imports,
            id
        } = req.body;

        let plan = {
            title,
            list,
            client,
            value,
            import: imports
        };

        let result = await PlansService.update(id, plan);

        if (result == true) {
            res.redirect("/admin/plans");
        } else {
            req.flash('title_msg', result.title_msg);
            req.flash('list_msg', result.list_msg);
            res.redirect("/admin/plans/edit/" + id);
        }
    }

    async store(req, res) {
        let {
            title,
            list,
            client,
            value,
            imports
        } = req.body;

        let plan = {
            title,
            list,
            client,
            value,
            import: imports
        };

        let result = await PlansService.store(plan);

        if (result == true) {

        } else {
            req.flash('title_msg', result.title_msg);
            req.flash('list_msg', result.list_msg);
            res.redirect("/admin/plans/create");
        }
    }
}

module.exports = new PlansController();