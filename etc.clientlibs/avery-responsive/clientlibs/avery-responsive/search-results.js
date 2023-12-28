var ADUtils = ADUtils || {};
ADUtils.Labels = ADUtils.Labels || {};
ADUtils.Labels.getLabel = function(label) {
	return ADUtils.Labels[label];
}
ADUtils.Labels.setLabel = function(label, value) {
	ADUtils.Labels[label] = value;
}
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["filter-box-checkbox"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

        return "                <div class=\"row \" style=\"width: 100%\">\n                    <div class=\"col-xs-12 col-sm-6\">\n"
            + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.itemsFirst : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "                    </div>\n                    <div class=\"col-xs-12 col-sm-6\">\n"
            + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "                    </div>\n                </div>\n"
            + ((stack1 = (helpers.ifGreater || (depth0 && depth0.ifGreater) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.items : depth0)) != null ? stack1.length : stack1),2,{"name":"ifGreater","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
    },"2":function(container,depth0,helpers,partials,data) {
        var stack1, alias1=container.lambda, alias2=container.escapeExpression;

        return "                            <div class=\"filter-item filter-check\" category-id='"
            + alias2(alias1((depth0 != null ? depth0.category : depth0), depth0))
            + "'>\n                                <label>\n                                    <input data-id='"
            + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
            + "' type=\"checkbox\" id=\"check-"
            + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
            + "\" "
            + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.checked : depth0),"true",{"name":"ifEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "  >\n                                    <span class=\"check-box\">\n                            <svg class=\"check-icon\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                                    viewBox=\"0 0 13 11.1\" style=\"enable-background:new 0 0 13 11.1;\" xml:space=\"preserve\">\n                                <g id=\"Layer_2_1_\">\n                                    <g id=\"Layer_1-2\">\n                                        <polygon class=\"st0\" points=\"10.8,0.5 4.6,7 2.2,4.6 0.5,6.4 4.5,10.5 4.6,10.5 4.7,10.5 12.5,2.3 		\"/>\n                                    </g>\n                                </g>\n                            </svg>\n                        </span>\n                                    <span data-id='"
            + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
            + "' class=\"check-label\">"
            + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
            + "<span\n                                            class=\"filter-count\"></span></span>\n                                </label>\n                            </div>\n";
    },"3":function(container,depth0,helpers,partials,data) {
        return " checked ";
    },"5":function(container,depth0,helpers,partials,data) {
        return "                    <a href=\"#\" class=\"more-button\"><span class=\"more\">" + ADUtils.Labels.getLabel("moreDropdownFilterText") +"</span><span class=\"less\">" + ADUtils.Labels.getLabel("lessDropdownFilterText") +"</span>\n                        <svg class='arrow-icon' version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n					viewBox=\"0 0 10.8 6.3\" style=\"enable-background:new 0 0 10.8 6.3;\" xml:space=\"preserve\">\n				<g id=\"Layer_2_1_\">\n					<g id=\"Layer_1-2\">\n						<polyline class=\"st0\" points=\"0.4,0.3 5.4,5.6 10.4,0.3 		\"/>\n					</g>\n				</g>\n				</svg>\n                    </a>\n";
    },"7":function(container,depth0,helpers,partials,data) {
        var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

        return ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "\n"
            + ((stack1 = (helpers.ifGreater || (depth0 && depth0.ifGreater) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.items : depth0)) != null ? stack1.length : stack1),4,{"name":"ifGreater","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
    },"8":function(container,depth0,helpers,partials,data) {
        var stack1, alias1=container.lambda, alias2=container.escapeExpression;

        return "                    <div class=\"filter-item filter-check\" category-id='"
            + alias2(alias1((depth0 != null ? depth0.category : depth0), depth0))
            + "'>\n                        <label>\n                            <input data-id='"
            + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
            + "' type=\"checkbox\" id=\"check-"
            + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
            + "\" "
            + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.checked : depth0),"true",{"name":"ifEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "  >\n                            <span class=\"check-box\">\n						<svg class=\"check-icon\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n								viewBox=\"0 0 13 11.1\" style=\"enable-background:new 0 0 13 11.1;\" xml:space=\"preserve\">\n							<g id=\"Layer_2_1_\">\n								<g id=\"Layer_1-2\">\n									<polygon class=\"st0\" points=\"10.8,0.5 4.6,7 2.2,4.6 0.5,6.4 4.5,10.5 4.6,10.5 4.7,10.5 12.5,2.3 		\"/>\n								</g>\n							</g>\n						</svg>\n					</span>\n                            <span data-id='"
            + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
            + "' class=\"check-label\">"
            + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
            + "<span class=\"filter-count\"></span></span>\n                        </label>\n                    </div>\n";
    },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

        return "<div class=\"filters-container\">\n    <div class=\"col-xs-12 filter-box " + ADUtils.Labels.getLabel("collapsibleClasses") + "\">\n        <h5 class=\"filter-box-title\">"
            + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
            + "\n            <svg class='arrow-icon' version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n				viewBox=\"0 0 10.8 6.3\" style=\"enable-background:new 0 0 10.8 6.3;\" xml:space=\"preserve\">\n			<g id=\"Layer_2_1_\">\n				<g id=\"Layer_1-2\">\n					<polyline class=\"st0\" points=\"0.4,0.3 5.4,5.6 10.4,0.3 		\"/>\n				</g>\n			</g>\n			</svg>\n        </h5>\n        <div class=\"filter-box-content expanded\">\n"
            + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,(depth0 != null ? depth0.displayOrder : depth0),"topToBottom",{"name":"ifEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "\n"
            + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias2).call(alias1,(depth0 != null ? depth0.displayOrder : depth0),"leftToRight",{"name":"ifEquals","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "        </div>\n    </div>\n</div>";
    },"useData":true});
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["filter-box-checkbox-multi"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

    return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.first),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
  },"2":function(container,depth0,helpers,partials,data) {
    return "					<span class=\"check-header col-xs-2 col-xs-offset-5 col-md-offset-6\">"
      + container.escapeExpression(container.lambda(depth0, depth0))
      + "</span>\n\n";
  },"4":function(container,depth0,helpers,partials,data) {
    return "					<span class=\"check-header col-xs-2\">"
      + container.escapeExpression(container.lambda(depth0, depth0))
      + "</span>\n";
  },"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

    return "		<div class=\"filter-check-multi row\"  category-id='"
      + alias2(alias1((depth0 != null ? depth0.category : depth0), depth0))
      + "'>\n			<span class=\"check-label col-xs-5 col-md-6\">"
      + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
      + "</span>\n"
      + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.value : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "		</div>\n";
  },"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

    return "			<div class=\"check-box-container col-xs-2\">\n				<label>\n					<input type=\"checkbox\" id=\"check-"
      + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
      + "-"
      + alias2(alias1(depth0, depth0))
      + "\" "
      + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].defaultValue : depths[1]),depth0,{"name":"ifEquals","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + ">\n					<span class=\"check-box\">\n						<svg class=\"check-icon\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n							viewBox=\"0 0 13 11.1\" style=\"enable-background:new 0 0 13 11.1;\" xml:space=\"preserve\">\n							<g id=\"Layer_2_1_\">\n								<g id=\"Layer_1-2\">\n									<polygon class=\"st0\" points=\"10.8,0.5 4.6,7 2.2,4.6 0.5,6.4 4.5,10.5 4.6,10.5 4.7,10.5 12.5,2.3 		\"/>\n								</g>\n							</g>\n						</svg>\n					</span>\n				</label>\n			</div>\n";
  },"8":function(container,depth0,helpers,partials,data) {
    return " checked";
  },"10":function(container,depth0,helpers,partials,data) {
    return "		<a href=\"#\" class=\"more-button\"><span class=\"more\">" + ADUtils.Labels.getLabel("moreDropdownFilterText") +"</span><span class=\"less\">" + ADUtils.Labels.getLabel("lessDropdownFilterText") +"</span> \n			<svg class='arrow-icon' version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n				viewBox=\"0 0 10.8 6.3\" style=\"enable-background:new 0 0 10.8 6.3;\" xml:space=\"preserve\">\n			<g id=\"Layer_2_1_\">\n				<g id=\"Layer_1-2\">\n					<polyline class=\"st0\" points=\"0.4,0.3 5.4,5.6 10.4,0.3 		\"/>\n				</g>\n			</g>\n			</svg>\n		</a>\n";
  },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

    return "<div class=\"col-xs-12 filter-box " + ADUtils.Labels.getLabel("collapsibleClasses") + "\">\n	<h5 class=\"filter-box-title\">"
      + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
      + " \n		<svg class='arrow-icon' version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n			viewBox=\"0 0 10.8 6.3\" style=\"enable-background:new 0 0 10.8 6.3;\" xml:space=\"preserve\">\n		<g id=\"Layer_2_1_\">\n			<g id=\"Layer_1-2\">\n				<polyline class=\"st0\" points=\"0.4,0.3 5.4,5.6 10.4,0.3 		\"/>\n			</g>\n		</g>\n		</svg>\n	</h5>\n	<div class=\"filter-box-content expanded\">\n		<div class=\"filter-check-multi-headers row\">\n"
      + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "		</div>\n"
      + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "		\n"
      + ((stack1 = (helpers.ifGreater || (depth0 && depth0.ifGreater) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.items : depth0)) != null ? stack1.length : stack1),2,{"name":"ifGreater","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "	</div>\n</div>";
  },"useData":true,"useDepths":true});
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["filter-dropdown"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        return "<option class=\"filter-dropdown-option\" value=\""
            + container.escapeExpression(container.lambda(depth0, depth0)) + "\">"
            + container.escapeExpression(container.lambda(depth0, depth0))
            + "</option> ";
    },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

        return "<div class=\"col-xs-12 filter-box " + ADUtils.Labels.getLabel("collapsibleClasses") + "\">\n	<h5 class=\"filter-box-title\">"
            + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
            + " \n		<svg class='arrow-icon' version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n			viewBox=\"0 0 10.8 6.3\" style=\"enable-background:new 0 0 10.8 6.3;\" xml:space=\"preserve\">\n		<g id=\"Layer_2_1_\">\n			<g id=\"Layer_1-2\">\n				<polyline class=\"st0\" points=\"0.4,0.3 5.4,5.6 10.4,0.3 		\"/>\n			</g>\n		</g>\n		</svg>	\n	</h5>\n"
            + " <div class=\"filter-box-content\" category-id='"
            + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
            + "'>\n"
            + "<select class=\"filter-dropdown-select\" data-default-value=\""
            + alias4(((helper = (helper = helpers.defaultValue || (depth0 != null ? depth0.defaultValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"defaultValue","hash":{},"data":data}) : helper)))
            + "\" >\n"
            + "<option class=\"filter-dropdown-option\" value=\"\">--------</option>"
            + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.steps : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "</select>\n		</div>\n	</div>\n</div>";
    },"useData":true});
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["filter-range-slider"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"step-label\">"
      + container.escapeExpression(container.lambda(depth0, depth0))
      + "</span> ";
  },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

    return "<div class=\"col-xs-12 filter-box " + ADUtils.Labels.getLabel("collapsibleClasses") + "\">\n	<h5 class=\"filter-box-title\">"
      + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
      + " \n		<svg class='arrow-icon' version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n			viewBox=\"0 0 10.8 6.3\" style=\"enable-background:new 0 0 10.8 6.3;\" xml:space=\"preserve\">\n		<g id=\"Layer_2_1_\">\n			<g id=\"Layer_1-2\">\n				<polyline class=\"st0\" points=\"0.4,0.3 5.4,5.6 10.4,0.3 		\"/>\n			</g>\n		</g>\n		</svg>	\n	</h5>\n	<div class=\"filter-box-content range-slider\">\n		<div class=\"filter-range-slider\" category-id='"
      + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
      + "'>\n			<div class=\"current-label\"></div>\n			<input type=\"range\" min=\"0\" max=\""
      + alias4((helpers.lengthMax || (depth0 && depth0.lengthMax) || alias2).call(alias1,(depth0 != null ? depth0.steps : depth0),{"name":"lengthMax","hash":{},"data":data}))
      + "\" step=\"1\" value=\"0\" data-default-value=\"" 
      + alias4(((helper = (helper = helpers.defaultValue || (depth0 != null ? depth0.defaultValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"defaultValue","hash":{},"data":data}) : helper)))
      + "\" >\n			<div class=\"steps-labels\">"
      + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.steps : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "</div>\n		</div>\n	</div>\n</div>";
  },"useData":true});
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["results-item"] = Handlebars.template({
    "1": function (container, depth0, helpers, partials, data) {
        var stack1, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : (container.nullContext || {});

        return "    <li>\n        <a target='_blank' href='"
            + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
            + "' class='row' id='"
            + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
            + "'>\n            <div class='result-image col-xs-4 col-sm-3'>\n                <img src='"
            + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
            + "' alt='result image'/>\n                <span class='see-specs hidden-sm hidden-md hidden-lg'>See Specs\n				<svg class=\"arrow-icon\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n					viewBox=\"0 0 10.8 6.3\" style=\"enable-background:new 0 0 10.8 6.3;\" xml:space=\"preserve\">\n					<g id=\"Layer_2_1_\">\n						<g id=\"Layer_1-2\">\n							<polyline points=\"0.4,0.3 5.4,5.6 10.4,0.3 		\"/>\n						</g>\n					</g>\n				</svg>\n			</span>\n            </div>\n            <div class='result-content col-xs-8 col-sm-5 col-md-6'>\n                <h3>"
            + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
            + "</h3>\n                <p>"
            + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
            + "</p>\n"
            + ((stack1 = helpers.each.call(alias3, (depth0 != null ? depth0.descriptionAttrs : depth0), {
                "name": "each",
                "hash": {},
                "fn": container.program(2, data, 0),
                "inverse": container.noop,
                "data": data
            })) != null ? stack1 : "")
            + "                <span class='see-specs hidden-xs "
            + ((stack1 = helpers["if"].call(alias3, (depth0 != null ? depth0.active : depth0), {
                "name": "if",
                "hash": {},
                "fn": container.program(7, data, 0),
                "inverse": container.noop,
                "data": data
            })) != null ? stack1 : "")
            + "'>" + ADUtils.Labels.getLabel("showSingleSpecText") +"\n				<svg class=\"arrow-icon\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n					viewBox=\"0 0 10.8 6.3\" style=\"enable-background:new 0 0 10.8 6.3;\" xml:space=\"preserve\">\n					<g id=\"Layer_2_1_\">\n						<g id=\"Layer_1-2\">\n							<polyline points=\"0.4,0.3 5.4,5.6 10.4,0.3 		\"/>\n						</g>\n					</g>\n				</svg>\n			</span>\n            </div>\n            <div class='result-links col-xs-8 col-sm-4 col-md-3'>\n            <span class='tech-info "
            + ((stack1 = helpers.unless.call(alias3, (depth0 != null ? depth0.pdf : depth0), {
                "name": "unless",
                "hash": {},
                "fn": container.program(9, data, 0),
                "inverse": container.noop,
                "data": data
            })) != null ? stack1 : "")
            + "'>\n				<span class='data-pdf' data-pdf='"
            + alias2(alias1((depth0 != null ? depth0.pdf : depth0), depth0))
            + "'>\n					<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n			viewBox=\"0 0 24 30.1\" style=\"enable-background:new 0 0 24 30.1;\" xml:space=\"preserve\">\n						<g id=\"Layer_2_1_\">\n							<g id=\"Layer_1-2\">\n								<polygon points=\"0.8,0.9 0.8,29.8 23.5,29.8 23.5,8.3 15.7,0.9 		\"/>\n								<path d=\"M24,7.6C24,7.5,24,7.5,24,7.6l-7.9-7.5L16,0h-0.1H0.3C0.1,0,0,0.1,0,0.3v29.5c0,0.2,0.1,0.3,0.3,0.3h23.4\n									c0.2,0,0.3-0.1,0.3-0.3V7.7C24,7.6,24,7.6,24,7.6z M16.2,1l6.7,6.3h-6.7V1z M0.6,29.5V0.6h14.9v7.1c0,0.2,0.1,0.3,0.3,0.3h7.5\n									v21.5H0.6z\"/>\n								<path d=\"M5.5,5.5h5.2c0.2,0,0.3-0.1,0.4-0.2c0-0.2-0.1-0.3-0.2-0.4c0,0-0.1,0-0.1,0H5.5C5.3,4.9,5.2,5,5.1,5.2\n									c0,0.2,0.1,0.3,0.2,0.4C5.4,5.5,5.5,5.5,5.5,5.5z\"/>\n								<path d=\"M5.5,10.4h5.2c0.2,0,0.3-0.1,0.4-0.2S11,9.9,10.8,9.8c0,0-0.1,0-0.1,0H5.5c-0.2,0-0.3,0.1-0.4,0.2\n									s0.1,0.3,0.2,0.4C5.4,10.4,5.5,10.4,5.5,10.4z\"/>\n								<path  d=\"M18.5,14.7h-13c-0.2,0-0.3,0.1-0.4,0.2s0.1,0.3,0.2,0.4c0,0,0.1,0,0.1,0h13c0.2,0,0.3-0.1,0.4-0.2\n									s-0.1-0.3-0.2-0.4C18.6,14.7,18.5,14.7,18.5,14.7z\"/>\n								<path d=\"M18.5,19.6h-13c-0.2,0-0.3,0.1-0.4,0.2c0,0.2,0.1,0.3,0.2,0.4c0,0,0.1,0,0.1,0h13c0.2,0,0.3-0.1,0.4-0.2\n									c0-0.2-0.1-0.3-0.2-0.4C18.6,19.6,18.5,19.6,18.5,19.6z\"/>\n								<path d=\"M18.5,24.6h-13c-0.2,0-0.3,0.1-0.4,0.2c0,0.2,0.1,0.3,0.2,0.4c0,0,0.1,0,0.1,0h13c0.2,0,0.3-0.1,0.4-0.2\n									c0-0.2-0.1-0.3-0.2-0.4C18.6,24.6,18.5,24.6,18.5,24.6z\"/>\n							</g>\n						</g>\n					</svg>\n					" + ADUtils.Labels.getLabel("technicalDataInfoLabelLine1") +" <br/>" + ADUtils.Labels.getLabel("technicalDataInfoLabelLine2") +"\n				</span>\n			</span>\n                <label class=\""
            + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(alias3, (depth0 != null ? depth0.showRequestSample : depth0), "false", {
                "name": "ifEquals",
                "hash": {},
                "fn": container.program(9, data, 0),
                "inverse": container.noop,
                "data": data
            })) != null ? stack1 : "")
            + "\">\n                    <input type=\"checkbox\" data-id='"
            + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
            + "' id=\"check-transfer_tape\" "
            + ((stack1 = helpers["if"].call(alias3, (depth0 != null ? depth0.isSelected : depth0), {
                "name": "if",
                "hash": {},
                "fn": container.program(11, data, 0),
                "inverse": container.noop,
                "data": data
            })) != null ? stack1 : "")
            + ">\n                    <span class=\"check-box\">\n\n				<svg class=\"check-icon\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n					viewBox=\"0 0 13 11.1\" style=\"enable-background:new 0 0 13 11.1;\" xml:space=\"preserve\">\n					<g id=\"Layer_2_1_\">\n						<g id=\"Layer_1-2\">\n							<polygon class=\"st0\" points=\"10.8,0.5 4.6,7 2.2,4.6 0.5,6.4 4.5,10.5 4.6,10.5 4.7,10.5 12.5,2.3 		\"/>\n						</g>\n					</g>\n				</svg>\n\n				</span>\n                    <span class=\"check-label\">" + ADUtils.Labels.getLabel("requestSampleLabelLine1") +" <br/>" + ADUtils.Labels.getLabel("requestSampleLabelLine2") +"</span>\n                </label>\n            </div>\n        </a>\n        <div class='results-specs "
            + ((stack1 = helpers["if"].call(alias3, (depth0 != null ? depth0.active : depth0), {
                "name": "if",
                "hash": {},
                "fn": container.program(7, data, 0),
                "inverse": container.noop,
                "data": data
            })) != null ? stack1 : "")
            + "'>\n            <a href='#' class='scroll-left'></a>\n            <div class='table-wrapper'>\n                <table>\n                    <tr>\n"
            + ((stack1 = helpers.each.call(alias3, (depth0 != null ? depth0.specsTable : depth0), {
                "name": "each",
                "hash": {},
                "fn": container.program(13, data, 0),
                "inverse": container.noop,
                "data": data
            })) != null ? stack1 : "")
            + "                    </tr>\n                    <tr>\n"
            + ((stack1 = helpers.each.call(alias3, (depth0 != null ? depth0.specsTable : depth0), {
                "name": "each",
                "hash": {},
                "fn": container.program(16, data, 0),
                "inverse": container.noop,
                "data": data
            })) != null ? stack1 : "")
            + "                    </tr>\n                </table>\n            </div>\n            <a href='#' class='scroll-right'></a>\n        </div>\n    </li>\n";
    }, "2": function (container, depth0, helpers, partials, data) {
        var stack1;

        return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? depth0.showAttribute : depth0), "true", {
            "name": "ifEquals",
            "hash": {},
            "fn": container.program(3, data, 0),
            "inverse": container.noop,
            "data": data
        })) != null ? stack1 : "");
    }, "3": function (container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : (container.nullContext || {});

        return "                        <p><span>"
            + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(alias1, {
                "name": "name",
                "hash": {},
                "data": data
            }) : helper)))
            + ":</span>\n"
            + ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.value : depth0), {
                "name": "each",
                "hash": {},
                "fn": container.program(4, data, 0),
                "inverse": container.noop,
                "data": data
            })) != null ? stack1 : "")
            + "                        </p>\n";
    }, "4": function (container, depth0, helpers, partials, data) {
        var stack1;

        return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}), depth0, {
            "name": "each",
            "hash": {},
            "fn": container.program(5, data, 0),
            "inverse": container.noop,
            "data": data
        })) != null ? stack1 : "");
    }, "5": function (container, depth0, helpers, partials, data) {
        return "                                    "
            + container.escapeExpression(container.lambda(depth0, depth0))
            + "\n";
    }, "7": function (container, depth0, helpers, partials, data) {
        return "active";
    }, "9": function (container, depth0, helpers, partials, data) {
        return "non-visible";
    }, "11": function (container, depth0, helpers, partials, data) {
        return "checked";
    }, "13": function (container, depth0, helpers, partials, data) {
        var stack1;

        return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? depth0.showAttribute : depth0), "true", {
            "name": "ifEquals",
            "hash": {},
            "fn": container.program(14, data, 0),
            "inverse": container.noop,
            "data": data
        })) != null ? stack1 : "");
    }, "14": function (container, depth0, helpers, partials, data) {
        return "                                <th>"
            + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
            + "</th>\n";
    }, "16": function (container, depth0, helpers, partials, data) {
        var stack1;

        return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? depth0.showAttribute : depth0), "true", {
            "name": "ifEquals",
            "hash": {},
            "fn": container.program(17, data, 0),
            "inverse": container.noop,
            "data": data
        })) != null ? stack1 : "");
    }, "17": function (container, depth0, helpers, partials, data) {
        var stack1;

        return "                                <td>\n"
            + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? depth0.value : depth0), {
                "name": "each",
                "hash": {},
                "fn": container.program(18, data, 0),
                "inverse": container.noop,
                "data": data
            })) != null ? stack1 : "")
            + "                                </td>\n";
    }, "18": function (container, depth0, helpers, partials, data) {
        var stack1;

        return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}), (data && data.first), {
            "name": "if",
            "hash": {},
            "fn": container.program(19, data, 0),
            "inverse": container.program(22, data, 0),
            "data": data
        })) != null ? stack1 : "");
    }, "19": function (container, depth0, helpers, partials, data) {
        var stack1;

        return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}), depth0, {
            "name": "each",
            "hash": {},
            "fn": container.program(20, data, 0),
            "inverse": container.noop,
            "data": data
        })) != null ? stack1 : "");
    }, "20": function (container, depth0, helpers, partials, data) {
        return "                                                "
            + container.escapeExpression(container.lambda(depth0, depth0))
            + "\n";
    }, "22": function (container, depth0, helpers, partials, data) {
        var stack1;

        return "                                            <br/>\n"
            + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}), depth0, {
                "name": "each",
                "hash": {},
                "fn": container.program(20, data, 0),
                "inverse": container.noop,
                "data": data
            })) != null ? stack1 : "");
    }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
        var stack1;

        return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}), depth0, {
            "name": "each",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data
        })) != null ? stack1 : "");
    }, "useData": true
});
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["no-results"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<li class='no-results'><h3>We didn't find any products that matched your search. Please adjust your filters.</h3></li>";
  },"useData":true});
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["modal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

    return "<div id=\""
      + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
      + "\" class=\"modal-overlay "
      + alias2(alias1((depth0 != null ? depth0["class"] : depth0), depth0))
      + "\">\n\n	<div class=\"modal-content\">\n		<div class=\"modal-header\">\n			<span class=\"close\">&times;</span>\n			<h2>"
      + ((stack1 = alias1((depth0 != null ? depth0.header : depth0), depth0)) != null ? stack1 : "")
      + "</h2>\n			<div class='modal-error hidden'></div>\n		</div>\n		<div class=\"modal-body\">\n			\n		</div>\n		<div class=\"modal-footer\">\n			\n		</div>\n	</div>\n</div>\n";
  },"useData":true});
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["modal-buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

    return "		<div class=\"button\">\n			<a href=\""
      + alias2(alias1((depth0 != null ? depth0.buttonPath : depth0), depth0))
      + "\" class=\" "
      + alias2(alias1((depth0 != null ? depth0.buttonClass : depth0), depth0))
      + " btn\">"
      + alias2(alias1((depth0 != null ? depth0.buttonText : depth0), depth0))
      + "</a>\n		</div>\n";
  },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

    return "<div class='modal-buttons'>\n"
      + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.buttons : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
      + "</div>";
  },"useData":true});
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["samples-modal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n";
  },"useData":true});
'use strict';

Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
	return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('ifGreater', function (arg1, arg2, options) {
	return arg1 > arg2 ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('ifLess', function (arg1, arg2, options) {
	return arg1 < arg2 ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('lengthMax', function (array, options) {
	return array.length > 0 ? array.length - 1 : 0;
});
(function(global) {
    /**
     * Polyfill URLSearchParams
     *
     * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
     */

    var checkIfIteratorIsSupported = function() {
        try {
            return !!Symbol.iterator;
        } catch (error) {
            return false;
        }
    };


    var iteratorSupported = checkIfIteratorIsSupported();

    var createIterator = function(items) {
        var iterator = {
            next: function() {
                var value = items.shift();
                return { done: value === void 0, value: value };
            }
        };

        if (iteratorSupported) {
            iterator[Symbol.iterator] = function() {
                return iterator;
            };
        }

        return iterator;
    };

    /**
     * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
     * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
     */
    var serializeParam = function(value) {
        return encodeURIComponent(value).replace(/%20/g, '+');
    };

    var deserializeParam = function(value) {
        return decodeURIComponent(value).replace(/\+/g, ' ');
    };

    var polyfillURLSearchParams = function() {

        var URLSearchParams = function(searchString) {
            Object.defineProperty(this, '_entries', { writable: true, value: {} });
            var typeofSearchString = typeof searchString;

            if (typeofSearchString === 'undefined') {
                // do nothing
            } else if (typeofSearchString === 'string') {
                if (searchString !== '') {
                    this._fromString(searchString);
                }
            } else if (searchString instanceof URLSearchParams) {
                var _this = this;
                searchString.forEach(function(value, name) {
                    _this.append(name, value);
                });
            } else if ((searchString !== null) && (typeofSearchString === 'object')) {
                if (Object.prototype.toString.call(searchString) === '[object Array]') {
                    for (var i = 0; i < searchString.length; i++) {
                        var entry = searchString[i];
                        if ((Object.prototype.toString.call(entry) === '[object Array]') || (entry.length !== 2)) {
                            this.append(entry[0], entry[1]);
                        } else {
                            throw new TypeError('Expected [string, any] as entry at index ' + i + ' of URLSearchParams\'s input');
                        }
                    }
                } else {
                    for (var key in searchString) {
                        if (searchString.hasOwnProperty(key)) {
                            this.append(key, searchString[key]);
                        }
                    }
                }
            } else {
                throw new TypeError('Unsupported input\'s type for URLSearchParams');
            }
        };

        var proto = URLSearchParams.prototype;

        proto.append = function(name, value) {
            if (name in this._entries) {
                this._entries[name].push(String(value));
            } else {
                this._entries[name] = [String(value)];
            }
        };

        proto.delete = function(name) {
            delete this._entries[name];
        };

        proto.get = function(name) {
            return (name in this._entries) ? this._entries[name][0] : null;
        };

        proto.getAll = function(name) {
            return (name in this._entries) ? this._entries[name].slice(0) : [];
        };

        proto.has = function(name) {
            return (name in this._entries);
        };

        proto.set = function(name, value) {
            this._entries[name] = [String(value)];
        };

        proto.forEach = function(callback, thisArg) {
            var entries;
            for (var name in this._entries) {
                if (this._entries.hasOwnProperty(name)) {
                    entries = this._entries[name];
                    for (var i = 0; i < entries.length; i++) {
                        callback.call(thisArg, entries[i], name, this);
                    }
                }
            }
        };

        proto.keys = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push(name);
            });
            return createIterator(items);
        };

        proto.values = function() {
            var items = [];
            this.forEach(function(value) {
                items.push(value);
            });
            return createIterator(items);
        };

        proto.entries = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push([name, value]);
            });
            return createIterator(items);
        };

        if (iteratorSupported) {
            proto[Symbol.iterator] = proto.entries;
        }

        proto.toString = function() {
            var searchArray = [];
            this.forEach(function(value, name) {
                searchArray.push(serializeParam(name) + '=' + serializeParam(value));
            });
            return searchArray.join('&');
        };


        global.URLSearchParams = URLSearchParams;
    };

    if (!('URLSearchParams' in global) || (new URLSearchParams('?a=1').toString() !== 'a=1')) {
        polyfillURLSearchParams();
    }

    var proto = URLSearchParams.prototype;

    if (typeof proto.sort !== 'function') {
        proto.sort = function() {
            var _this = this;
            var items = [];
            this.forEach(function(value, name) {
                items.push([name, value]);
                if (!_this._entries) {
                    _this.delete(name);
                }
            });
            items.sort(function(a, b) {
                if (a[0] < b[0]) {
                    return -1;
                } else if (a[0] > b[0]) {
                    return +1;
                } else {
                    return 0;
                }
            });
            if (_this._entries) { // force reset because IE keeps keys index
                _this._entries = {};
            }
            for (var i = 0; i < items.length; i++) {
                this.append(items[i][0], items[i][1]);
            }
        };
    }

    if (typeof proto._fromString !== 'function') {
        Object.defineProperty(proto, '_fromString', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function(searchString) {
                if (this._entries) {
                    this._entries = {};
                } else {
                    var keys = [];
                    this.forEach(function(value, name) {
                        keys.push(name);
                    });
                    for (var i = 0; i < keys.length; i++) {
                        this.delete(keys[i]);
                    }
                }

                searchString = searchString.replace(/^\?/, '');
                var attributes = searchString.split('&');
                var attribute;
                for (var i = 0; i < attributes.length; i++) {
                    attribute = attributes[i].split('=');
                    this.append(
                        deserializeParam(attribute[0]),
                        (attribute.length > 1) ? deserializeParam(attribute[1]) : ''
                    );
                }
            }
        });
    }

    // HTMLAnchorElement

})(
    (typeof global !== 'undefined') ? global
        : ((typeof window !== 'undefined') ? window
        : ((typeof self !== 'undefined') ? self : this))
);

(function(global) {
    /**
     * Polyfill URL
     *
     * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
     */

    var checkIfURLIsSupported = function() {
        try {
            var u = new URL('b', 'http://a');
            u.pathname = 'c%20d';
            return (u.href === 'http://a/c%20d') && u.searchParams;
        } catch (e) {
            return false;
        }
    };


    var polyfillURL = function() {
        var _URL = global.URL;

        var URL = function(url, base) {
            if (typeof url !== 'string') url = String(url);

            // Only create another document if the base is different from current location.
            var doc = document, baseElement;
            if (base && (global.location === void 0 || base !== global.location.href)) {
                doc = document.implementation.createHTMLDocument('');
                baseElement = doc.createElement('base');
                baseElement.href = base;
                doc.head.appendChild(baseElement);
                try {
                    if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
                } catch (err) {
                    throw new Error('URL unable to set base ' + base + ' due to ' + err);
                }
            }

            var anchorElement = doc.createElement('a');
            anchorElement.href = url;
            if (baseElement) {
                doc.body.appendChild(anchorElement);
                anchorElement.href = anchorElement.href; // force href to refresh
            }

            if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href)) {
                throw new TypeError('Invalid URL');
            }

            Object.defineProperty(this, '_anchorElement', {
                value: anchorElement
            });


            // create a linked searchParams which reflect its changes on URL
            var searchParams = new URLSearchParams(this.search);
            var enableSearchUpdate = true;
            var enableSearchParamsUpdate = true;
            var _this = this;
            ['append', 'delete', 'set'].forEach(function(methodName) {
                var method = searchParams[methodName];
                searchParams[methodName] = function() {
                    method.apply(searchParams, arguments);
                    if (enableSearchUpdate) {
                        enableSearchParamsUpdate = false;
                        _this.search = searchParams.toString();
                        enableSearchParamsUpdate = true;
                    }
                };
            });

            Object.defineProperty(this, 'searchParams', {
                value: searchParams,
                enumerable: true
            });

            var search = void 0;
            Object.defineProperty(this, '_updateSearchParams', {
                enumerable: false,
                configurable: false,
                writable: false,
                value: function() {
                    if (this.search !== search) {
                        search = this.search;
                        if (enableSearchParamsUpdate) {
                            enableSearchUpdate = false;
                            this.searchParams._fromString(this.search);
                            enableSearchUpdate = true;
                        }
                    }
                }
            });
        };

        var proto = URL.prototype;

        var linkURLWithAnchorAttribute = function(attributeName) {
            Object.defineProperty(proto, attributeName, {
                get: function() {
                    return this._anchorElement[attributeName];
                },
                set: function(value) {
                    this._anchorElement[attributeName] = value;
                },
                enumerable: true
            });
        };

        ['hash', 'host', 'hostname', 'port', 'protocol']
            .forEach(function(attributeName) {
                linkURLWithAnchorAttribute(attributeName);
            });

        Object.defineProperty(proto, 'search', {
            get: function() {
                return this._anchorElement['search'];
            },
            set: function(value) {
                this._anchorElement['search'] = value;
                this._updateSearchParams();
            },
            enumerable: true
        });

        Object.defineProperties(proto, {

            'toString': {
                get: function() {
                    var _this = this;
                    return function() {
                        return _this.href;
                    };
                }
            },

            'href': {
                get: function() {
                    return this._anchorElement.href.replace(/\?$/, '');
                },
                set: function(value) {
                    this._anchorElement.href = value;
                    this._updateSearchParams();
                },
                enumerable: true
            },

            'pathname': {
                get: function() {
                    return this._anchorElement.pathname.replace(/(^\/?)/, '/');
                },
                set: function(value) {
                    this._anchorElement.pathname = value;
                },
                enumerable: true
            },

            'origin': {
                get: function() {
                    // get expected port from protocol
                    var expectedPort = { 'http:': 80, 'https:': 443, 'ftp:': 21 }[this._anchorElement.protocol];
                    // add port to origin if, expected port is different than actual port
                    // and it is not empty f.e http://foo:8080
                    // 8080 != 80 && 8080 != ''
                    var addPortToOrigin = this._anchorElement.port != expectedPort &&
                        this._anchorElement.port !== '';

                    return this._anchorElement.protocol +
                        '//' +
                        this._anchorElement.hostname +
                        (addPortToOrigin ? (':' + this._anchorElement.port) : '');
                },
                enumerable: true
            },

            'password': { // TODO
                get: function() {
                    return '';
                },
                set: function(value) {
                },
                enumerable: true
            },

            'username': { // TODO
                get: function() {
                    return '';
                },
                set: function(value) {
                },
                enumerable: true
            },
        });

        URL.createObjectURL = function(blob) {
            return _URL.createObjectURL.apply(_URL, arguments);
        };

        URL.revokeObjectURL = function(url) {
            return _URL.revokeObjectURL.apply(_URL, arguments);
        };

        global.URL = URL;

    };

    if (!checkIfURLIsSupported()) {
        polyfillURL();
    }

    if ((global.location !== void 0) && !('origin' in global.location)) {
        var getOrigin = function() {
            return global.location.protocol + '//' + global.location.hostname + (global.location.port ? (':' + global.location.port) : '');
        };

        try {
            Object.defineProperty(global.location, 'origin', {
                get: getOrigin,
                enumerable: true
            });
        } catch (e) {
            setInterval(function() {
                global.location.origin = getOrigin();
            }, 100);
        }
    }

})(
    (typeof global !== 'undefined') ? global
        : ((typeof window !== 'undefined') ? window
        : ((typeof self !== 'undefined') ? self : this))
);
'use strict';

(function () {

  var url_string = window.location.href;
  var url = new URL(url_string);
  var selectedAttributes = url.searchParams;

  //back end will want to pass authored text into these variables
  var showSpecText = $("#showSpecText").attr("data"),
    hideSpecText = $("#hideSpecText").attr("data"),
    showSingleSpecText = $("#showSingleSpecText").attr("data"),
    hideSingleSpecText = $("#hideSingleSpecText").attr("data"),
    requestedSamplesTitle = $("#requestedSamplesTitle").attr("data"),
    paginationPageLabel = $("#paginationPageLabel").attr("data"),
    lessDropdownFilterText = $("#lessDropdownFilterText").attr("data"),
    moreDropdownFilterText = $("#moreDropdownFilterText").attr("data"),
    technicalDataInfoLabelLine1 = $("#technicalDataInfoLabelLine1").attr("data"),
    technicalDataInfoLabelLine2 = $("#technicalDataInfoLabelLine2").attr("data"), 
    requestSampleLabelLine1 = $("#requestSampleLabelLine1").attr("data"), 
    requestSampleLabelLine2 = $("#requestSampleLabelLine2").attr("data"),
    collapsibleClasses = $("#collapsibleClasses").attr("data"),
    samplesModalContainerName = '#samplesModalContainer',
    filterBy = [],
    paginationSize = 10,
    sampleLimit = 5,
    mobileWidth = 767,
    resultsDescriptionCharacterCount = 135;
  
  ADUtils.Labels.setLabel("showSingleSpecText", showSingleSpecText);
  ADUtils.Labels.setLabel("hideSingleSpecText", hideSingleSpecText);
  ADUtils.Labels.setLabel("lessDropdownFilterText", lessDropdownFilterText);
  ADUtils.Labels.setLabel("moreDropdownFilterText", moreDropdownFilterText);
  ADUtils.Labels.setLabel("technicalDataInfoLabelLine1", technicalDataInfoLabelLine1);
  ADUtils.Labels.setLabel("technicalDataInfoLabelLine2", technicalDataInfoLabelLine2);
  ADUtils.Labels.setLabel("requestSampleLabelLine1", requestSampleLabelLine1);
  ADUtils.Labels.setLabel("requestSampleLabelLine2", requestSampleLabelLine2);
  ADUtils.Labels.setLabel("collapsibleClasses", collapsibleClasses);
  

  //used for tracking results returned from Json.
  $.resultsObject = new Object();
  //fitlered results tracked here
  $.filteredArray = new Object();

  function buildFilters(filterData) {

    $(filterData).each(function () {
      console.log(this);
    });

    for (var key in filterData) {
      var filterStyle;
      if (filterData[key].items || filterData[key].steps) {
        if (filterData[key].style === 'multi-select' && filterData[key].displayOrder === 'topToBottom') {
            filterData[key].itemsFirst = filterData[key].items.splice(0, Math.ceil(filterData[key].items.length / 2));
            filterStyle = 'filter-box-checkbox';
        } else if (filterData[key].style === 'multi-select') {
          filterData[key].displayOrder = 'leftToRight';
          filterStyle = 'filter-box-checkbox';
        } else if (filterData[key].style === 'single-select') {
          filterStyle = 'filter-box-checkbox-multi';
        } else if (filterData[key].style === 'dropdown') {
          filterStyle = 'filter-dropdown';
        } else if (filterData[key].style === 'slider') {
          filterStyle = 'filter-range-slider';
        } else {
          filterStyle = 'filter-box-checkbox';
        }

        $('.filter').append(getTemplate(filterStyle, filterData[key]));
      }
    }
    setFilterEvents();
  }

  function buildResults(resultsData) {
    if ($('.show-all').hasClass('active')) {
      $(resultsData).each(function () {
        this.active = true;
      });
    }
    $('#resultsContainer ul').html(getTemplate('results-item', resultsData));
    setResultsEvents();
  }

  function updateSortBar(pagination) {
    var offsetStart = (pagination.pageNumber - 1) * pagination.pageSize + 1,
      offsetEnd = offsetStart + pagination.pageSize - 1,
      totalNumber = pagination.totalNumber;

    if (totalNumber <= offsetEnd) {
      offsetEnd = totalNumber;
    }
    if (offsetEnd === 0) {
      $('.sort-offset').html(0);
      $('.number-found').parent().addClass('error-message');
      $('.search-pagination').css('visibility', 'hidden');
    } else {
      $('.sort-offset').html(offsetStart + ' - ' + offsetEnd);
      $('.number-found').parent().removeClass('error-message');
      $('.search-pagination').css('visibility', '');
    }

    $('.sort-total').html(totalNumber);
    $('.number-found').html(totalNumber);

    //add text label
    $("<li class='paginationjs-text'>" + paginationPageLabel +"</li>").insertAfter(".paginationjs-prev");

    //clone second sort
    $('#sortClone .search-results-sort').remove();

    $(".search-results-sort").clone(true).appendTo("#sortClone");
  }

  function setResultsEvents() {
    //make sure any extra events are removed since content refreshes often
    $('.see-specs').off();
    $('.result-links input[type=checkbox]').off();
    $('.result-links .data-pdf').off();
    $('.scroll-left').off();
    $('.scroll-right').off();
    $(".results-container .result-content p:first-of-type").off();
    $(".samples-modal .result-content p:first-of-type").off();

    //add event to open specs
    $('.see-specs').on('click touchend', function (e) {
      e.preventDefault();
      $(this).closest('a').next().toggleClass('active');

      if ($(this).hasClass('active')) {
        $(this).contents().first()[0].textContent = showSingleSpecText;
        $(this).removeClass('active');
      } else {
        $(this).contents().first()[0].textContent = hideSingleSpecText;
        $(this).addClass('active');
      }
      return false;
    });

    //link to pdf in new window
    $('.result-links .data-pdf').on('click', function (e) {
      e.preventDefault();
      var pdfURL = $(this).attr('data-pdf');
      window.open(pdfURL);
    });

    //keep track of selected items in array and update sample number
    $('.result-links input[type=checkbox]').on('change', function (e) {
      var sampleNumber,
        selectedItem,
        productID = $(this).attr('data-id');

      selectedItem = $.resultsObject.filter(function (x) {
        return x.id === productID;
      });

      //toggle selected state on object
      $(selectedItem).each(function () {
        this.isSelected = !this.isSelected;
      });

      //if click comes from modal, toggle other checkbox and update button
      if ($(this).parents('.modal-overlay').length) {
        var alternateCheckBox = $('.results-container input[data-id="' + productID + '"]'),
          selectedProducts = $.resultsObject.filter(function (x) {
            return x.isSelected === true;
          });

        alternateCheckBox.prop("checked", !alternateCheckBox.prop("checked"));
        //update button in samples modal.
        updateSamplesButton(selectedProducts);

        //if more samples are selected than the set limit, display error and disable button
        if (selectedProducts.length > sampleLimit) {
          $(samplesModalContainerName + ' .modal-error').removeClass('hidden');
          $(samplesModalContainerName + ' .submit').addClass('disabled');
        } else {
          $(samplesModalContainerName + ' .modal-error').addClass('hidden');
          $(samplesModalContainerName + ' .submit').removeClass('disabled');
        }
      }

      //update requested sample number
      sampleNumber = $.resultsObject.filter(function (x) {
        return x.isSelected === true;
      }).length;

      $('.results-number').text(sampleNumber);
      $('.preview-sample span').text(sampleNumber);
    });
    $('.scroll-left').on('click touchend', function (e) {
      e.preventDefault();
      $(this).next().animate({
        scrollLeft: "-=200px"
      }, "slow");
      return false;
    });

    $('.scroll-right').on('click touchend', function (e) {
      e.preventDefault();

      $(this).prev().animate({
        scrollLeft: "+=200px"
      }, "slow");
      return false;
    });

    $(".results-container .result-content p:first-of-type").ellipsis({
      type: 'lines',
      count: 2
    });
  }

  //set the numbers that appear after the solutions. Can be turned on for other filters.
  function setFilterNumbers() {
    if ($('.filter-count').length) {
      $('.filter-count').each(function () {
        var filterID = $(this).parent().attr('data-id'),
          filterCategory = $(this).parents('.filter-item').attr('category-id') || $(this).parents('.filter-check-multi').attr('category-id'),
          filterNumber;

        filterNumber = $.resultsObject.filter(function (x) {
          return x[filterCategory] === filterID;
        }).length;
        if (filterNumber > 0) {
          $(this).html('(' + filterNumber + ')');
        }
      });
    }
  }

  //get handlebars template for page rendering
  function getTemplate(templateId, data) {
    var template = Handlebars.templates[templateId] || null;
    var templateData = data || {};

    return template ? template(templateData) : '';
  }

  //set filter events after rendered
  function setFilterEvents() {
    $('.filter .filter-box .more-button').on('click', function (e) {
      e.preventDefault();
      $(this).parent().toggleClass('expanded');
    });

    $('.filter .filter-box .filter-box-title').on('click', function (e) {
      e.preventDefault();
      $(this).parent().toggleClass('mobile-expanded');
      $(this).parent().toggleClass('desktop-expanded');
    });

    $('.filter .filter-box input[type="range"]').rangeslider({
      polyfill: false,
      onInit: function onInit() {
        updateRangeLabel(this.$element, this.position);
      },
      onSlide: function onSlide(position, value) {
        updateRangeLabel(this.$element, value);
      }
    });

    $('.filter .filter-box input[type="range"]').val(0).change();

    $('.filter .filter-box input[type="range"]').on('change', function () {
      var isChecked = true,
        categoryId = $(this).parents('.filter-range-slider').attr('category-id'),
        currentValue = $(this).parents('.filter-range-slider').find('.current-label').text();

        if ($(this).val() === "0" || $(this).val() === 0) {
          isChecked = false;
        }

        if ($.resultsObject.length) {
          parseFilterBySlider(categoryId, currentValue, isChecked);
        }
    });
    $('.filter .filter-box input[type=checkbox]').on('change', function (e) {
      var filterValue = $(this).attr('id').replace('check-', ''),
        categoryId = $(this).parents('.filter-item').attr('category-id') || $(this).parents('.filter-check-multi').attr('category-id'),
        object = {},
        isChecked = $(this).prop("checked");

      //Category is part of the value on some ids and needs to be removed
      filterValue = filterValue.replace(categoryId + '-', '').toLowerCase();
      parseFilterBy(categoryId, filterValue, isChecked);
    });
    $('.filter .filter-box select.filter-dropdown-select').on('change', function (e) {
      var filterValue = this.value;
      var categoryId =$(this).parents('.filter-box-content').attr('category-id');

      var isChecked = true;
      if (!filterValue) {
        isChecked = false;
      }
      //remove previous slider value if there is one
      $.each(filterBy, function (i) {
        if (filterBy[i][categoryId]) {
          filterBy.splice(i, 1);
          return false;
        }
      });
      parseFilterBy(categoryId, filterValue, isChecked);
    });
  }

  //set which categories to filter by
  function parseFilterBySlider(categoryId, filterValue, isChecked) {
    var object = {};

    object[categoryId] = filterValue.split(' ').join('_').toLowerCase();
    //remove previous slider value if there is one
    $.each(filterBy, function (i) {
      if (filterBy[i][categoryId]) {
        filterBy.splice(i, 1);
        return false;
      }
    });
    //if not starting value, push slider value to filter
    if (isChecked) {
      filterBy.push(object);
    }

    filterResults();
  }

  //set which categories to filter by
  function parseFilterBy(categoryId, filterValue, isChecked) {
    var object = {};

    object[categoryId] = filterValue.toLowerCase();
    if (isChecked) {
      filterBy.push(object);
    } else {
      //this will parse and remove unchecked filters
      $.each(filterBy, function (i) {
        if (filterBy[i][categoryId] === filterValue) {
          filterBy.splice(i, 1);
          return false;
        }
      });
    }

    filterResults();
  }

  function updateRange() {
    $('.filter .filter-box input[type="range"]').rangeslider('update', true);
  }

  function updateRangeLabel(rangeElement, position) {
    rangeElement.siblings('.current-label').text(rangeElement.siblings('.steps-labels').children().eq(position).text());
  }

  function isMobile() {
    return $(window).width() < mobileWidth;
  }

  function filterResults() {
    //This is ultimately all results that are filtered and passed into handlebars template
    $.filteredArray = [];

    // sort filter values to make sure we do category by category
    filterBy.sort(function (a, b) {
      if (Object.keys(a)[0] < Object.keys(b)[0]) return -1;
      if (Object.keys(a)[0] > Object.keys(b)[0]) return 1;
      return 0;
    });

    //totalFilterArray is used to track the previously filtered categories. It starts out as the total results obtained earlier and then becomes equal to the previously filtered categories when categories change.
    //This is needed so that we can track multiple values in each category and can do reductive/additive filtering.
    //We also reset the filter index to zero on a new category using filterArrayIndex
    var previousKey = '',
      totalFilterArray = $.resultsObject,
      filterArrayIndex = 0;

    //parse through array of filters and find object values that match
    $(filterBy).each(function (index) {
      var filterKey = Object.keys(this)[0],
        filterValue = this[filterKey],
        matchedItems;

      //if move into a new filter category, adjust main array we filter from previously filtered array and wipe out filtered array so old results aren't included
      if (filterKey != previousKey && index > 0) {
        totalFilterArray = $.filteredArray;
        filterArrayIndex = 0;
        $.filteredArray = [];
      }

      //find items that match value from tracked filter array
      matchedItems = totalFilterArray.filter(function (x) {
        //if it's an array of options, dig into the array for match. Otherwise just grab top level match
        if(x[filterKey] && x[filterKey].length>1){
        	filterValue=filterValue.replace(/ /g,"_");
            if (Array.isArray(x[filterKey])) {
              return $.inArray(filterValue, x[filterKey]) != -1;
            } else {
              return x[filterKey] === filterValue;
            }
          return false;
        }
        else{
          return x[filterKey] === filterValue;
        }
        
      });


      //find items that match and push into appropriate filtered object at correct index.
      $(matchedItems).each(function () {
        if (!checkarray(this, $.filteredArray)){
            $.filteredArray[filterArrayIndex] = this;
        filterArrayIndex++;
          } 

      });

      //update the previous key so we can track which category we are in
      previousKey = filterKey;
    });

    //kill any old pagination events
    $('.search-pagination').pagination('destroy');
    $('.search-pagination >').remove();
    $('#sortClone').empty();

    //reinitialize
    if (filterBy.length) {
      setPagination($.filteredArray);
    } else {
      setPagination($.resultsObject);
    }
  }

  function checkarray(id, filteredArray) {
  var i = filteredArray.indexOf(id);
  if(i > -1)
    return true;
  else
    return false;
}

  //initializes pagination js
  function setPagination(data) {
    $('.search-pagination').pagination({
      dataSource: data,
      locator: 'response.results',
      pageSize: paginationSize,
      prevText: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 27.5 23.4" style="enable-background:new 0 0 27.5 23.4;" xml:space="preserve"> <g id="Layer_2_1_"><g id="Layer_1-2"><rect x="0.4" y="0.4"width="26.7" height="22.7"/><polyline points="17.7,5.2 8,12 17.7,18     "/></g></g></svg>',
      nextText: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 27.5 23.4" style="enable-background:new 0 0 27.5 23.4;" xml:space="preserve"><g id="Layer_2_1_"><g id="Layer_1-2"><rect x="0.4" y="0.4" width="26.7" height="22.7"/><polyline points="9.3,18 19,11.2 9.3,5.2    "/></g></g></svg>',
      callback: function callback(data, pagination) {

        updateSortBar(pagination);
        buildResults(data);
      }
    });
    if (!data.length) {
      $('#resultsContainer ul').html(getTemplate('no-results'));
    }
  }

  function buildSamplesModal() {
    //build modal container and buttons
    var $searchContainer = $('.search-container');
    var samplesModalData = {
        id: 'samplesModal',
        class: 'samples-modal',
        header: "<span class='results-number'></span> " + requestedSamplesTitle
      },
      samplesModalButtons = {
        buttons: [{
          buttonPath: ($searchContainer.data('sampleRequestPath') + '.html') || '#',
          buttonClass: 'submit',
          buttonText: $searchContainer.data('sampleRequestButtonLabel') || 'Submit Request'
        }]
      },
      modalErrorMessage = 'You have reached the maximum number of sample request, please revise your selections reduced to max ' + sampleLimit + '.';

    $(samplesModalContainerName).html(getTemplate('modal', samplesModalData));
    $(samplesModalContainerName + ' .modal-footer').html(getTemplate('modal-buttons', samplesModalButtons));
    $(samplesModalContainerName + ' .modal-error').html(modalErrorMessage);

    $('.modal-overlay').on('click touchend', function () {

      if ($(event.target).is('.modal-overlay')) {
        $(this).hide();
        $('body').css('overflow', "");
      }
    });

    $('.modal-header span.close').on('click touchend', function () {
      $('.modal-overlay').hide();
      $('body').css('overflow', "");
      return false;
    });
  }

  function buildSamplesModalContent() {
    //place selected items in modal here
    var selectedProducts = $.resultsObject.filter(function (x) {
      return x.isSelected === true;
    });

    $(samplesModalContainerName + ' .modal-body').html(getTemplate('results-item', selectedProducts));

    updateSamplesButton(selectedProducts);
    setResultsEvents();
  }

  function updateSamplesButton(selectedProducts) {
    //var productsData = JSON.stringify(selectedProducts);
    var productsData = selectedProducts.map(function (obj, idx) {
      return {id: obj.id, name: obj.name}
    });
    localStorage.setItem('sampleRequestProducts', JSON.stringify(productsData));
  }

  function preFillForm() {
    var $sampleRequestForm = $('.form .avd-form');
    if ($sampleRequestForm.length > 0) {
      var $samplesRequested = $sampleRequestForm.find('[name="Samples"]');
      var $productNum = $sampleRequestForm.find('[name="Product_num"]');
      var sampleRequestProducts = JSON.parse(localStorage.getItem('sampleRequestProducts'));
      var samplesRequested = '';
      var productNum = '';

      if (sampleRequestProducts && sampleRequestProducts.length > 0) {
        sampleRequestProducts.map(function (obj, idx) {
          if (idx < sampleRequestProducts.length - 1) {
            samplesRequested = samplesRequested + obj.name + ', ';
            productNum = productNum + obj.id + ', ';
          } else {
            samplesRequested = samplesRequested + obj.name;
            productNum = productNum + obj.id;
          }
        });
        $samplesRequested.val(samplesRequested);
        $productNum.val(productNum);
      }

    }
  }

  function setObjectValues() {
    $($.resultsObject).each(function () {
      var context = this,
        valueArray = new Array;
      //set selected to false
      this.isSelected = false;

      //pull description attributes out and place them top level of the object with the correct id for the filters
      $(this.descriptionAttrs).each(function (index, value) {
        var attributeData = this; 
        context[attributeData.id] = [];
        var attrsArray = new Array;
        if (this.value) {
          //For multiple values, an array is needed
          if(this.value.length>1) {
            $(this.value).each(function (subIndex, subValue) {
              for (var key in subValue) {
                attrsArray.push(key);
              }
            });
            // to filter and not send only one
            if(this.id in context) {
              context[attributeData.id] = attrsArray;
            }
          }
          else {
            for (var key in this.value[0]) {
              context[attributeData.id] = key;
            }
          }
        }
      });

      //pull table attributes out and place them top level of the object with the correct id for the filters
      $(this.specsTable).each(function (index, value) {
        var attributeData = this;
        context[attributeData.id] = [];
        var specsArray = new Array;
        if (this.value) {
          //For multiple values, an array is needed
          if(this.value.length>1) {
            $(this.value).each(function (subIndex, subValue) {
              for (var key in subValue) {
                specsArray.push(key);
              }
            });
            if(this.id in context) {
              context[attributeData.id] = specsArray;
            }
          }
          else {
            for (var key in this.value[0]) {
              context[attributeData.id] = key;
            }
          }
        }
      });
    });
  }

  //if any filters are set as default by integration or by the product wizard, update results to reflect that.
  function checkDefaultFilters() {

    $('.filter .filter-box :checkbox:checked').each(function (e) {
      var filterValue = $(this).attr('id').replace('check-', ''),
        categoryId = $(this).parents('.filter-item').attr('category-id') || $(this).parents('.filter-check-multi').attr('category-id'),
        object = {},
        isChecked = $(this).prop("checked");

      //Category is part of the value on some ids and needs to be removed
      filterValue = filterValue.replace(categoryId + '-', '').toLowerCase();
      parseFilterBy(categoryId, filterValue, isChecked);
    });

    $('.filter .filter-box input[type="range"]').each(function () {
      var isChecked = true,
        categoryId = $(this).parents('.filter-range-slider').attr('category-id'),
        defaultValue = $(this).attr("data-default-value"),
        currentValue = 0,
        counter = 0;

        if (!defaultValue || defaultValue === ' '){
            defaultValue = $(this).parents('.filter-range-slider').find('.current-label').text();
        }

        $(this).parents('.filter-range-slider').find('.step-label').each(function(){
            if($(this).text() !== defaultValue){
                counter = counter + 1;
            } else {
                currentValue = counter;
            }
        });

        if ($.resultsObject.length) {
          $(this).val(currentValue).change();
          //parseFilterBySlider(categoryId, defaultValue, isChecked);
        }
    });


    $('.filter .filter-box select.filter-dropdown-select').each(function () {
      // var isChecked = true,
      //     categoryId = $(this).parents('.filter-range-slider').attr('category-id'),
      var defaultValue = $(this).attr("data-default-value");

      $(this).find('option[value="' + defaultValue + '"]').prop('selected', true);
    });

  }

  //bind basic click events for page
  $('.mobile-filter-button').on('click touchend', function (e) {
    e.preventDefault();
    $('.filter').addClass('mobile-expanded');

    updateRange();
  });

  $('.filter .apply-button').on('click touchend', function (e) {
    e.preventDefault();
    $('.filter').toggleClass('mobile-expanded');
    if ($('.filter').hasClass('mobile-expanded')) updateRange();
  });

  $('.preview-sample').on('click touchend', function (e) {
    e.preventDefault();
    var numberSelected = $.resultsObject.filter(function (x) {
      return x.isSelected === true;
    }).length;

    if (numberSelected > 0) {
      buildSamplesModalContent();
      $('#samplesModal').show();
      $('body').css('overflow', "hidden");
      //if more samples are selected than the set limit, display error and disable button
      if (numberSelected > sampleLimit) {
        $(samplesModalContainerName + ' .modal-error').removeClass('hidden');
        $(samplesModalContainerName + ' .submit').addClass('disabled');
      } else {
        $(samplesModalContainerName + ' .modal-error').addClass('hidden');
        $(samplesModalContainerName + ' .submit').removeClass('disabled');
      }
    }
    $(".samples-modal .result-content p:first-of-type").off();

    $(".samples-modal .result-content p:first-of-type").ellipsis({
      type: 'lines',
      count: 3
    });
  });

  $('.show-all').on('click touchend', function (e) {
    e.preventDefault();
    if ($('.show-all').hasClass('active')) {
      $('.show-all span').text(showSpecText);
      $('.show-all').removeClass('active');
      $('.see-specs').removeClass('active');
      $('.see-specs').each(function () {
        $(this).contents().first()[0].textContent = showSingleSpecText;
      });
      $('.results-specs').removeClass('active');
    } else {
      $('.show-all span').text(hideSpecText);
      $('.show-all').addClass('active');
      $('.see-specs').addClass('active');
      $('.results-specs').addClass('active');
      $('.see-specs').each(function () {
        $(this).contents().first()[0].textContent = hideSingleSpecText;
      });
    }
    return false;
  });

  $('.reset-button').on('click touchend', function () {
    $('.filter input:checkbox').removeAttr('checked');

    // Reset sliders
    $('.filter .filter-box input[type="range"]').each(function () {
      $(this).val(0).change();
    });
    $('.filter .filter-box select.filter-dropdown-select option').each(function () {
      $(this).attr("selected", false);
    });

    filterBy = [];
    filterResults();
    return false;
  });

  $('.search-results-phone span').on('click touchend', function () {

    return false;
  });

  $('.results-header-wrapper').sticky({topSpacing: 0, responsiveWidth: true});

  $(window).on('resize', function () {
    $('.results-header-wrapper').sticky('update');
  });

  init();

  function init() {
    buildSamplesModal();
    preFillForm();

    if ($('.results-header-wrapper').length > 0) {

      if (showSpecText) {
        $('.show-all span').text(showSpecText);
      }

      buildSamplesModal();
      var attributeFilters = $("#attributeFilters").attr("data");
      var descAttrs = $("#descAttrs").attr("data");
      var currentPagePath = $("#currentPagePath").attr("data");
      var productDefaultThumb = $("#productDefaultThumb").attr("data");


      $.ajax({
        url: '/bin/avery-ihm/advancedsearch',

        async: false,
        type: "GET",
        data: {
          attributeFilters: attributeFilters,
          descAttrs: descAttrs,
          currentPagePath: currentPagePath,
          productDefaultThumb: productDefaultThumb,
          selectedAttributes: selectedAttributes
        },
        success: function (data) {

          // Load filters JSON
          buildFilters(data.filters);

          // Load Results JSON
          $.resultsObject = data.response.results;
          $('.results-header .number-found').text($.resultsObject.length);

          //update defaults we want on json object - Integration team can add more or do custom data structuring in this function
          setObjectValues();

          //Disabling the display of filter numbers as per the request from AD.
          //setFilterNumbers();

          if (data.hasOwnProperty('results') || data.response.hasOwnProperty('results')) setPagination(data.response.results);
          checkDefaultFilters();

        },
        error: function () {
          allDataLoaded = true; // don't again try loading data
        }
      });
    }
  }
})();

