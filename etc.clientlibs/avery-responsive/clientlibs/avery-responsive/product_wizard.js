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
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["step"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
        return "<div class=\"swiper-slide wizard-step\">\n";
    },"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
        var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

        return "				<label class=\"form-item col-xs-6\">\n					<input type=\"radio\" name=\"step"
            + alias2(alias1((depths[1] != null ? depths[1].stepIndex : depths[1]), depth0))
            + "\" \n										value=\""
            + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data}) : helper)))
            + "\" \n										data-index=\""
            + alias2(alias1((depths[1] != null ? depths[1].stepIndex : depths[1]), depth0))
            + "\" \n										data-index=\""
            + alias2(alias1((depths[1] != null ? depths[1].stepNumber : depths[1]), depth0))
            + "\" \n										data-next-path=\""
            + alias2(((helper = (helper = helpers.nextQuestionPath || (depth0 != null ? depth0.nextQuestionPath : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"nextQuestionPath","hash":{},"data":data}) : helper)))
            + "\" \n										data-prev-path=\""
            + alias2(alias1((depths[1] != null ? depths[1].previousQuestionPath : depths[1]), depth0))
            + "\"\n										data-results-path=\""
            + alias2(((helper = (helper = helpers.viewResultsPath || (depth0 != null ? depth0.viewResultsPath : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"viewResultsPath","hash":{},"data":data}) : helper)))
            + "\"\n										data-attributes=\""
            + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.optionAttributes : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "\"\n										>\n					<span class=\"item-icon\"></span>\n					<span class=\"item-label\">"
            + alias2(((helper = (helper = helpers.optionText || (depth0 != null ? depth0.optionText : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"optionText","hash":{},"data":data}) : helper)))
            + "</span>\n				</label>\n";
    },"4":function(container,depth0,helpers,partials,data) {
        var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

        return alias4(((helper = (helper = helpers.attributeName || (depth0 != null ? depth0.attributeName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"attributeName","hash":{},"data":data}) : helper)))
            + ":"
            + alias4(((helper = (helper = helpers.attributeValue || (depth0 != null ? depth0.attributeValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"attributeValue","hash":{},"data":data}) : helper)))
            + ";";
    },"6":function(container,depth0,helpers,partials,data) {
        return "</div>\n";
    },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

        return ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.previousWasIconLevel : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "	<div class=\"pos-select\">\n		<div class=\"step-header\">\n			<h2 class=\"step-number\">"
            + alias4(((helper = (helper = helpers.stepNumber || (depth0 != null ? depth0.stepNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stepNumber","hash":{},"data":data}) : helper)))
            + "</h2>\n			<h3 class=\"step-title\">"
            + alias4(alias5(((stack1 = (depth0 != null ? depth0.productAdvisorCardModel : depth0)) != null ? stack1.questionText : stack1), depth0))
            + "</h3>\n			<a class=\"pos-back-button\" href=\"#\" data-index=\""
            + alias4(((helper = (helper = helpers.stepIndex || (depth0 != null ? depth0.stepIndex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stepIndex","hash":{},"data":data}) : helper)))
            + "\" data-step=\""
            + alias4(((helper = (helper = helpers.stepNumber || (depth0 != null ? depth0.stepNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stepNumber","hash":{},"data":data}) : helper)))
            + "\"><img src=\"/etc.clientlibs/avery-responsive/clientlibs/avery-responsive/hero-carousel/resources/images/icons/wizardback.svg\" alt=\"Back\"></a>\n		</div>\n		<div class=\"step-content\">\n			<p class=\"content-header\">"
            + alias4(alias5(((stack1 = (depth0 != null ? depth0.productAdvisorCardModel : depth0)) != null ? stack1.instructiveText : stack1), depth0))
            + "</p>\n			<form class=\"form-step row\">				\n"
            + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.productAdvisorCardModel : depth0)) != null ? stack1.questionOptions : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "			</form>\n		</div>\n	</div>\n"
            + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.isInternal : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
    },"useData":true,"useDepths":true});
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["step-pre"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
        var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

        return "				<label class=\"form-pre-item col-xs-6\">\n					<input type=\"radio\" name=\"prestep"
            + alias2(alias1((depths[1] != null ? depths[1].stepNumber : depths[1]), depth0))
            + "\" \n										value=\""
            + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data}) : helper)))
            + "\" \n										data-index=\""
            + alias2(alias1((depths[1] != null ? depths[1].stepNumber : depths[1]), depth0))
            + "\" \n										data-next-path=\""
            + alias2(((helper = (helper = helpers.nextQuestionPath || (depth0 != null ? depth0.nextQuestionPath : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"nextQuestionPath","hash":{},"data":data}) : helper)))
            + "\" \n										data-prev-path=\""
            + alias2(alias1((depths[1] != null ? depths[1].previousQuestionPath : depths[1]), depth0))
            + "\"\n										data-results-path=\""
            + alias2(((helper = (helper = helpers.viewResultsPath || (depth0 != null ? depth0.viewResultsPath : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"viewResultsPath","hash":{},"data":data}) : helper)))
            + "\"\n										data-attributes=\""
            + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.optionAttributes : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "\">\n					<span class=\"item-icon\">\n						"
            + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.optionIconImagePath : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "\n						<img class=\"check-image\" src=\"/etc.clientlibs/avery-responsive/clientlibs/avery-responsive/productadvisor/resources/images/icons/check-icon.png\" alt=\"check\">\n					</span>\n					<span class=\"item-label\">"
            + alias2(((helper = (helper = helpers.optionText || (depth0 != null ? depth0.optionText : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"optionText","hash":{},"data":data}) : helper)))
            + "</span>\n				</label>\n";
    },"2":function(container,depth0,helpers,partials,data) {
        var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

        return alias4(((helper = (helper = helpers.attributeName || (depth0 != null ? depth0.attributeName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"attributeName","hash":{},"data":data}) : helper)))
            + ":"
            + alias4(((helper = (helper = helpers.attributeValue || (depth0 != null ? depth0.attributeValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"attributeValue","hash":{},"data":data}) : helper)))
            + ";";
    },"4":function(container,depth0,helpers,partials,data) {
        var helper;

        return "<img class=\"icon-image\" src=\""
            + container.escapeExpression(((helper = (helper = helpers.optionIconImagePath || (depth0 != null ? depth0.optionIconImagePath : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"optionIconImagePath","hash":{},"data":data}) : helper)))
            + "\">";
    },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

        return "<div class=\"swiper-slide wizard-step\">\n	<div class=\"pre-select\">\n		<div class=\"step-header\">\n			<h2 class=\"step-number\">"
            + alias2(((helper = (helper = helpers.stepNumber || (depth0 != null ? depth0.stepNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"stepNumber","hash":{},"data":data}) : helper)))
            + "</h2>\n			<h3 class=\"step-title\">"
            + alias2(alias3(((stack1 = (depth0 != null ? depth0.productAdvisorCardModel : depth0)) != null ? stack1.questionText : stack1), depth0))
            + "</h3>\n		</div>\n		<div class=\"step-content\">\n			<p class=\"content-header\">"
            + alias2(alias3(((stack1 = (depth0 != null ? depth0.productAdvisorCardModel : depth0)) != null ? stack1.instructiveText : stack1), depth0))
            + "</p>\n			<form class=\"form-step row\">\n"
            + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.productAdvisorCardModel : depth0)) != null ? stack1.questionOptions : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "			</form>\n		</div>\n	</div>\n	<div class=\"pos-select\">\n	</div>\n</div>";
    },"useData":true,"useDepths":true});
'use strict';

(function () {

    // Local Variables
    //Avery Dennison NOTE: this will be set to Avery Dennison first card url 'advisorCardPath=/content/pt/na/en/product-advisor-cards/on-page-load'
    var initialStepsDataUrl = $('[data-firstquestion]').data('firstquestion');
    //Avery Dennison NOTE: insert .avery-responsive.productadvisor.json for baseUrl
    var baseUrl = $('[data-currentpagepath]').data('currentpagepath') + '.avery-responsive.productadvisor.json';
    var previousQuestionPath = '';
    var isAuthor = $('[data-isauthor]');

    var selectedSteps = [];
    var wizardSwiper = null;
    var wizardData = null;
    var transitionTime = 300;
    var swiperContainer = $('.wizard .swiper-wrapper');
    var stickyNavContainer = $('.wizard .sticky-nav-container');
    var stickyNavContent = $('.wizard .sticky-nav-container .sticky-content');
    var stepNumber = 1;
    var isFinal = false;
    var selectedAttributes = new Array();
    var resultCounts = new Array();
    var resultLinks = new Array();
    var subStepLinks = new Array();
    var subStepCount = new Array();

    //seperate variable used to track if user has already reached the final step but is just going hitting prev and next
    var finalStepReached = false;

    var swiperOptions = {

        allowSlidePrev: true,
        allowSlideNext: false,
        slidesPerView: 'auto',
        allowTouchMove: false,
        spaceBetween: -450,
        centeredSlides: true,
        roundLengths: true,
        autoHeight: true,
        preventClicks: false,

        breakpoints: {
            480: {
                spaceBetween: -100
            },
            768: {
                spaceBetween: -250
            },
            992: {
                spaceBetween: -384
            }
        }

        // pagination: {
        // 	el: '.wizard-pagination',
        // 	type: 'fraction',
        // 	renderFraction: function (currentClass, totalClass) {
        // 		return 'STEP <span class="steps-num"><span class="' + currentClass + '"></span>' +
        // 			   ' of ' +
        // 			   '<span class="' + totalClass + '"></span></span>';
        // 	}
        // },

    };

    /** Create the initial step using the loaded data and start the Swiper component. */
    function createSwiper() {

        setStep(wizardData);

        initSwiper();
        setupSwiperEvents();
        updateProducts();
    }

    /** Set the Swiper component with events using the swiperOptions data. */
    function initSwiper() {
        wizardSwiper = new Swiper('.swiper-container', swiperOptions);

        wizardSwiper.on('slideChange', function (e) {
            checkNextAvailable();
        });

        wizardSwiper.on('transitionStart', function (e) {
            setPositionClasses();
        });

        checkNextAvailable();
    }

    /** Set the events for Swiper navigation. */
    function setupSwiperEvents() {

        $('.wizard .wizard-navigation .next-slide').on('click', function (e) {
            e.preventDefault();
            if ($('.swiper-slide-active .pos-select input:checked').length > 0 && $('.swiper-slide-active .pos-select').css('display') === 'none') {
                $('.swiper-slide-active .pre-select').fadeOut();
                $('.swiper-slide-active .pos-select').fadeIn();
                $('.swiper-slide-active .pre-select').addClass('pre-selected');
            } else {
                wizardSwiper.slideNext();
            }

            if (wizardData.stepNumber === wizardSwiper.activeIndex + 1 && finalStepReached) {
                isFinal = true;
            }
            updateProducts();
            updateViewButtons();
            checkNextAvailable();
        });

        $('.wizard .wizard-navigation .back-slide').on('click', function (e) {
            if ($('.swiper-slide-active .pos-back-button').css('display') != 'none') {
                $('.swiper-slide-active .pos-select').fadeOut().siblings('.pre-select').fadeIn();
                $('.swiper-slide-active .pre-select').removeClass('pre-selected');
            }
            isFinal = false;

            e.preventDefault();
            wizardSwiper.slidePrev();
            updateProducts();
            updateViewButtons();
            checkNextAvailable();
        });
    }

    /** Set a new Step, choose if is a regular step or a substep using the data.isPre property.
     * @param {object} data - Step data object.
     */
    function setStep(data) {
        var stepData = data || {};

        if (stepData.productAdvisorCardModel.isIconLevel) {
            setPreStep(data);
        } else {
            setPosStep(data);
        }
    }

    /** Set a new SubStep, use the data.stepNumber property for the position.
     * @param {object} data - Step data object.
     */
    function setPreStep(data) {
        var oldStep = null;
        var newStep = null;
        if (!wizardSwiper) {
            data.stepNumber = stepNumber;
        }

        //swiperContainer.append(getTemplate('step-pre', data));
        cleanSteps(data.stepNumber - 1);
        if (swiperContainer.children().length < data.stepNumber) {
            swiperContainer.append(getTemplate('step-pre', data));
            newStep = swiperContainer.children().last();
        } else {
            oldStep = swiperContainer.children().eq(data.stepNumber - 1).replaceWith(getTemplate('step-pre', data));
            newStep = swiperContainer.children().eq(data.stepNumber - 1);
            skipTransition(newStep);
        }

        if (oldStep) removeStepEvents(oldStep, true);
        if (newStep) setupStepEvents(newStep);
    }

    /** Set a new Step, use the data.stepNumber property for the position and the data.isInternal property to know if is internal (inside of a SubStep).
     * @param {object} data - Step data object.
     */
    function setPosStep(data) {
        var oldStep = null;
        var newStep = null;
        var questionOptions = data.productAdvisorCardModel.questionOptions;

        if (!wizardSwiper) {
            data.stepNumber = stepNumber;
        }

        if (data.previousWasIconLevel) {
            cleanSteps(data.stepNumber);
            oldStep = swiperContainer.children().eq(data.stepNumber - 1).find('.pos-select').replaceWith(getTemplate('step', data));
            newStep = swiperContainer.children().eq(data.stepNumber - 1);
        } else {
            cleanSteps(data.stepNumber - 1);
            swiperContainer.append(getTemplate('step', data));
            newStep = swiperContainer.children().last();
        }

        if (oldStep) removeStepEvents(oldStep);
        if (newStep) setupStepEvents(newStep);
    }

    /** Set the events for a new Step radio buttons and back button.
     * @param {jQuery Element} step - Slide element.
     */
    function setupStepEvents(step) {
        step.find('.pos-select .form-step input[type=radio], .pre-select .form-step input[type=radio]').off();
        step.find('.pos-select .form-step input[type=radio], .pre-select .form-step input[type=radio]').on('click', function (e) {
            var option = parseInt(this.value) || 0,
                stepIndex = $(this).data('index'),
                optionData = {},
                stepDataUrl = $(this).data('next-path'),
                prevDataUrl = $(this).data('prev-path'),
                viewResultsPath = $(this).data('results-path'),
                isPre = $(this).parents('.pre-select').length > 0;

            //update to false any time they make a new selection
            finalStepReached = false;

            resultLinks[wizardSwiper.activeIndex] = viewResultsPath;
            if (isPre) {
                subStepLinks[wizardSwiper.activeIndex] = viewResultsPath;
            } else {
                subStepLinks[wizardSwiper.activeIndex] = '';
            }

            if (isPre && $('.swiper-slide-active .pre-selected').length > 0) {
                $('.swiper-slide-active .pre-selected').removeClass('pre-selected');
            }
            if (selectedAttributes.length > wizardSwiper.activeIndex) {
                selectedAttributes = selectedAttributes.slice(0, wizardSwiper.activeIndex + 1);
            }
            if (resultLinks.length > wizardSwiper.activeIndex) {
                resultLinks = resultLinks.slice(0, wizardSwiper.activeIndex + 1);
                subStepLinks = subStepLinks.slice(0, wizardSwiper.activeIndex + 1);
            }
            if (resultCounts.length > wizardSwiper.activeIndex) {
                resultCounts = resultCounts.slice(0, wizardSwiper.activeIndex + 1);
                subStepCount = subStepCount.slice(0, wizardSwiper.activeIndex + 1);
            }

            if ($(this).data('attributes') && $(this).data('attributes') != '') {
                selectedAttributes[wizardSwiper.activeIndex] = $(this).data('attributes');
            } else {
                selectedAttributes[wizardSwiper.activeIndex] = '';
            }

            if (stepDataUrl != '') {
                isFinal = false;
            } else {
                isFinal = true;
                finalStepReached = true;
            }
            updateSteps(stepIndex, option);
            getStepJson(stepIndex, stepDataUrl, this, isPre, prevDataUrl);
            checkNextAvailable();
        });

        step.find('.pos-select .pos-back-button').on('click', function (e) {
            var stepIndex = $(this).data('index');

            e.preventDefault();

            $(this).closest('.pos-select').fadeOut().siblings('.pre-select').fadeIn(function () {
                updateProducts();
                checkNextAvailable();
            });
        });
    }

    /** Remove the events for a Step and SubStep.
     * @param {jQuery Element} step - Slide element.
     * @param {boolean} cleanPre - Flag to clean the SubStep events.
     */
    function removeStepEvents(step, cleanPre) {
        step.find('.pos-select .form-step input[type=radio]').unbind('change');
        step.find('.pos-select .pos-back-button').unbind('click');

        if (cleanPre) step.find('.pre-select .form-step input[type=radio]').unbind('change');
    }

    /** Remove all the Steps elements and events after an specific position.
     * @param {int} index - Slide position.
     */
    function cleanSteps(index) {

        for (var i = index; i < swiperContainer.children().length; i++) {
            var stepElement = swiperContainer.children().eq(i);
            removeStepEvents(stepElement, true);
        }

        swiperContainer.find('.wizard-step:gt(' + (index - 1) + ')').remove();
    }

    /** Reset the forms selections inside of the Slide.
     * @param {jQuery Element} step - Slide element.
     */
    function resetForms(step) {
        var forms = step.find('.form-step');
        $.each(forms, function (i, value) {
            value.reset();
        });
    }

    /** Get the HTML from a preloaded Handlebars template using the provided data.
     * @param {string} templateId - Id of the preloaded Handlebars template.
     * @param {object} data - Step data object.
     * @returns {string} compiled HTML.
     */
    function getTemplate(templateId, data) {
        var template = Handlebars.templates[templateId] || null;
        var templateData = data || {};

        return template ? template(templateData) : '';
    }

    /** Get the data for an Step in a specific position.
     * @param {int} index - Slide position.
     * @returns {object} Step data object.
     */
    function getStepData(index) {
        var data = wizardData;

        if (selectedSteps.length - 1 < index) return {};

        for (var i = 0; i < index + 1; i++) {
            data = data.options[selectedSteps[i]];
        }

        return data;
    }

    /** Function to grab new step data via ajax/
     * @param {int} index - Slide position.
     * @param {string} stepsDataUrl - Ajax url
     * @param {obect} context - The HTML element that was clicked
     * @returns {object} Step data object.
     */
    function getStepJson(index, nextDataUrl, context, isPre, previousDataUrl) {
        //TO DO after approval: Trigger gif loader here
        var stepsDataUrl = baseUrl + "?nextQuestionPath=" + nextDataUrl + "&previousIconLevel=" + isPre + "&previousQuestionPath=" + previousDataUrl;

        $.each(selectedAttributes, function (i, value) {
            //each step can have multiple attributes and in order to be properly tracked between steps, need to be stored seperately in string
            if (value != '') {
                var multipleItemAttributes = value.split(';');
                $.each(multipleItemAttributes, function (i, subValue) {
                    //append each one to url
                    if (subValue != '') {
                        stepsDataUrl += "&selectedAttributes=" + subValue;
                    }
                });
            }
        });

        $.getJSON(stepsDataUrl, function (data) {
            if (data) {
                //TO DO after approval: kill gif loader here
                wizardData = data;

                if (isPre) {
                    data.stepNumber = wizardSwiper.activeIndex + 1;
                    setStep(data);
                    $(context).parent().addClass('selected').siblings().removeClass('selected');
                    $(context).closest('.pre-select').addClass('pre-selected').fadeOut().siblings('.pos-select').fadeIn();
                } else if (!isFinal) {
                    data.stepNumber = wizardSwiper.activeIndex + 2;
                    setStep(data);
                    wizardSwiper.update();
                    checkNextAvailable();
                }

                if (isPre) {
                    subStepCount[wizardSwiper.activeIndex] = wizardData.resultCount;
                } else if (!data.previousWasIconLevel) {
                    subStepCount[wizardSwiper.activeIndex + 1] = '';
                }
                resultCounts[wizardSwiper.activeIndex] = wizardData.resultCount;
                updateProducts();
                checkNextAvailable();
                updateViewButtons();
            }
        });
    }

    /** Get the data for the Step in the last position (selected option).
     * @returns {object} Step data object.
     */
    function getSelectedData() {
        return getStepData(selectedSteps.length - 1);
    }

    /** Check if there is a next step available and modify the navigation according to the selected step data. */
    function checkNextAvailable() {
        var selectedData = wizardData;
        var products = wizardData.resultCount;
        var nextAvailabe = !isFinal && selectedData.stepNumber > wizardSwiper.activeIndex + 1;

        if ($('.swiper-slide-active .pos-select input:checked').length > 0 && $('.swiper-slide-active .pos-select').css('display') === 'none') {
            isFinal = false;
            nextAvailabe = true;
        } else if (selectedData.stepNumber > wizardSwiper.activeIndex + 1 || $('.swiper-slide').length > wizardSwiper.activeIndex + 1) {
            nextAvailabe = true;
        }
        if (isFinal && wizardSwiper.slides.length > wizardSwiper.activeIndex) {
            cleanSteps(wizardSwiper.activeIndex + 1);
        }
        wizardSwiper.allowSlideNext = nextAvailabe;

        $('.wizard .wizard-navigation .next-slide').toggleClass('disabled', !nextAvailabe);
        $('.wizard .wizard-navigation .back-slide').toggleClass('disabled', wizardSwiper.activeIndex == 0);

        $('.wizard .wizard-navigation .next-slide').toggleClass('hidden', isFinal);
        $('.wizard .wizard-navigation .view-prod').toggleClass('hidden', !isFinal);

        $('.wizard .wizard-navigation .error-text').toggleClass('hidden', products > 0);
        $('.wizard .wizard-navigation .info-text').toggleClass('hidden', !isFinal || products < 1);

        if (wizardData) {}
    }

    /** Add classes to the Steps in the position [active]+2 and [active]-2 to specific styles. */
    function setPositionClasses() {
        $('.wizard .swiper-slide').removeClass('swiper-slide-prev-prev swiper-slide-next-next');
        $('.wizard .swiper-slide-prev').prev().addClass('swiper-slide-prev-prev');
        $('.wizard .swiper-slide-next').next().addClass('swiper-slide-next-next');
    }

    /** Add class to avoid transitions for Steps elements, and remove it after the transitionTime local variable.
     * @param {jQuery Element} element - jQuery element to apply the class.
     */
    function skipTransition(element) {

        element.addClass('no-transition').delay(transitionTime).queue(function (next) {
            $(this).removeClass('no-transition');
            next();
        });
    }

    /** Update the selectedSteps array adding a value in a specific index and remove the values after that index.
     * @param {int} index - Selection index.
     * @param {int} value - Selection value.
     */
    function updateSteps(index, value) {
        if (value !== null) {
            selectedSteps.splice(index, selectedSteps.length - index, value);
        } else {
            selectedSteps.splice(index, selectedSteps.length - index);
        }
    }

    /** Update the products count using the selected options. */
    function updateProducts() {
        if (subStepCount[wizardSwiper.activeIndex] != '' && $('.swiper-slide-active .pre-selected').length > 0 && $('.swiper-slide-active .pos-select').css('display') === 'none') {
            $('.wizard .wizard-navigation .wizard-results .product-count').html(subStepCount[wizardSwiper.activeIndex]);
        } else {
            $('.wizard .wizard-navigation .wizard-results .product-count').html(resultCounts[wizardSwiper.activeIndex]);
        }
    }

    /** Update the view results url using the selected options. */
    function updateViewButtons() {
        if (subStepLinks[wizardSwiper.activeIndex] && $('.swiper-slide-active .pre-selected').length > 0 && $('.swiper-slide-active .pos-select').css('display') === 'none') {
            $('.wizard .wizard-navigation .wizard-results a').attr('href', subStepLinks[wizardSwiper.activeIndex]);
        } else {
            $('.wizard .wizard-navigation .wizard-results a').attr('href', resultLinks[wizardSwiper.activeIndex]);
        }
        $('.wizard .wizard-navigation .buttons-container .view-prod').attr('href', resultLinks[wizardSwiper.activeIndex]);
    }

    /** Get the total of the products using a Slide data (including the products inside of childs).
     * @param {object} data - Step data object.
     * @returns {int} Products count
     */
    function getProducts(data) {
        var products = 0;

        function iterate(obj) {

            if (obj.hasOwnProperty('options')) {
                var options = obj.options;
                for (var i = 0; i < options.length; i++) {
                    iterate(options[i]);
                }
            } else if (obj.hasOwnProperty('products')) {
                products += obj.products;
            }
        }

        iterate(data);

        return products;
    }

    /** Check if the navigation should be sticky according tho Window Height and Scroll */
    function checkSticky() {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var stickyPosition = stickyNavContainer.offset().top + stickyNavContent.outerHeight();

        stickyNavContainer.toggleClass('sticky', windowHeight + scrollTop < stickyPosition);
    }

    /** Add the properties needed for the steps creation/navigation logic to the data loaded
     * @param {object} data - Step data object.
     * @returns {object} Step data object with the properties (isInternal, stepIndex, stepNumber, isPre).
     */
    function setIndexStepsData(data) {

        function addIndex(stepData, index, stepNum, internal) {
            var isPre = !internal && stepData.hasOwnProperty('substep');

            stepData.isInternal = internal;
            stepData.stepIndex = index;
            stepData.stepNumber = internal ? stepNum : stepNum + 1;
            stepData.isPre = isPre;

            if (stepData.hasOwnProperty('options')) {
                for (var i = 0; i < stepData.options.length; i++) {
                    addIndex(stepData.options[i], index + 1, stepData.stepNumber, isPre);
                }
            }
        }

        addIndex(data, 0, 0, false);

        return data;
    }

    /** Init function, Load the JSON and set the Window events */
    function init() {

        if (isAuthor.length < 1 && initialStepsDataUrl) {

            //Avery Dennison NOTE: For integration, use fullstepRequest in getJSON instead of initialstepsDataUrl
            var fullStepRequest = baseUrl + '?nextQuestionPath=' + initialStepsDataUrl;
            // Load filters JSON
            $.getJSON(fullStepRequest, function (data) {
                if (data) {
                    //wizardData = setIndexStepsData(data);
                    wizardData = data;
                    if (wizardData.productAdvisorCardModel.isIconLevel) {
                        subStepCount.push(wizardData.resultCount);
                    } else {
                        subStepCount.push('');
                    }
                    resultCounts.push(wizardData.resultCount);

                    createSwiper();
                    checkSticky();
                }
            });

            $(window).on('scroll resize', function (e) {
                checkSticky();
            });
        }
    }

    init();
})();
