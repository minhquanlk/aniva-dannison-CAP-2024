if (typeof AveryDennison === 'undefined') {
    var AveryDennison = {};
}

AveryDennison.Text = {
    CONST: {
        HREF: 'href',
        CLICK: 'onClick',
        RTE_ANCHOR: '.rte-text-p a',
        DOC_EXT_FILES: 'pdf|zip'
    },

    init: function() {
        $(AveryDennison.Text.CONST.RTE_ANCHOR).each(function() {
            var $a = $(this);
            if (typeof $a.attr(AveryDennison.Text.CONST.HREF) !== 'undefined') {
                var url = $a.attr(AveryDennison.Text.CONST.HREF);
                if (typeof $a.attr(AveryDennison.Text.CONST.CLICK) === 'undefined') {
                    var fileExt = url.split('.').pop();
                    if (fileExt.match(AveryDennison.Text.CONST.DOC_EXT_FILES)) {
                        $a.attr(AveryDennison.Text.CONST.CLICK, "javascript:ga('send', 'event', 'Document', 'Download','" + url + "');");
                    } else {
                        $a.attr(AveryDennison.Text.CONST.CLICK, "javascript:ga('send', 'event', 'Referral link', 'click','" + url + "');");
                    }
                }
            }
        });
    }
};

$(document).ready(function() {
    AveryDennison.Text.init();
});
if (typeof AveryDennison === 'undefined') {
    var AveryDennison = {};
}

AveryDennison.WrapTrainingRegisterForm = {
    init: function() {

        var trainingName = $('#training-name').data('trainingName');
        var trainingLocation = $('#training-location').data('trainingLocation');
        var postbackUrl = $('#postback-url').data('postbackUrl');
        var trainingPrice = $('#training-price').data('trainingPrice');
        var trainingDate = $('#training-date').data('trainingDate');
        var trainingType = $('#training-type').data('trainingType');
        var trainingProvider = $('#training-provider').data('trainingProvider');
        var trainingInstructor = $('#training-instructor').data('trainingInstructor');
        var trainingPath = $('#training-path').data('trainingPath');
        var trainingCapacity = $('#training-capacity').data('trainingCapacity');
        var trainingCurrentCount = $('#training-current-count').data('trainingCurrentCount');

        var emailTemplate = $('#email-template').data('emailTemplate');
        var confirmationPath = $('#confirmation-path').data('confirmationPath');
        var formID = "wrapTrainingRegistrationForm";
        var errorText = "This field is required.";
        var errorMarkup = "<div class=\"form_row form_error\"><div class=\"form_leftcol\"><div class=\"form_leftcollabel\">";
        errorMarkup = errorMarkup + "<span>&nbsp;</span></div><div class=\"form_leftcolmark\">&nbsp;</div>";
        errorMarkup = errorMarkup + "</div><div class=\"form_rightcol form_error\">" + errorText + "</div></div>";

        var company_name = $("#" + formID + " input[id=company_name]");

        $("#" + formID).submit(function() {
            if (!formvalidate()) {
                return false;
            }
        });

        AveryDennison.WrapTrainingRegisterForm.evalSeatCapacity(trainingCapacity, trainingCurrentCount);

        // Validates all required inputs
        var formvalidate = function() {
            var validate = true;
            var i = 1;
            var mainName = "";
            var mainInfo = "";
            var otherInfo = "";
            var trainingInfo = "";
            var amount;

            trainingInfo = "&trainingName=" + trainingName;
            trainingInfo = trainingInfo + "&" + "trainingLocation=" + trainingLocation;
            trainingInfo = trainingInfo + "&" + "trainingDates=" + trainingDate;
            trainingInfo = trainingInfo + "&" + "trainingType=" + trainingType;
            trainingInfo = trainingInfo + "&" + "trainingProvider=" + trainingProvider;
            trainingInfo = trainingInfo + "&" + "trainingInstructor=" + trainingInstructor;
            trainingInfo = trainingInfo + "&" + "trainingPath=" + trainingPath;
            trainingInfo = trainingInfo + "&" + "company_name=" + company_name.val();

            $("#" + formID + " input.required").each(function() {
                var inputValue = $(this).val();
                mainInfo = mainInfo + "&" + $(this).attr("name") + "=" + inputValue;
                if (inputValue == null || inputValue == "") {
                    $(this).parents(".section.text").append($(errorMarkup));
                    validate = false;
                };
            });

            // if name[n] is not null, email[n] is required
            $("#" + formID + " input[id^=name]").each(function() {
                var inputValue = $(this).val();
                if (inputValue != null && inputValue != "") {
                    i++;
                    var nameId = $(this).attr("id");
                    var num = nameId.substr(nameId.length - 1, 1);
                    if (!isNaN(num)) {
                        var email = $("#" + formID + " input[id=email" + num + "]");
                        otherInfo = otherInfo + "&name" + i + "=" + inputValue + "&email" + i + "=" + email.val();
                        if (email != null && email != "") {
                            if (email.val() == "") {
                                email.parents(".wt-form-input").append($(errorMarkup));
                                validate = false;
                            }
                        }
                    }
                }
            });

            amount = "&amount=" + trainingPrice * i;
            var urlWithParams = postbackUrl + emailTemplate + confirmationPath + trainingInfo + amount + mainInfo + otherInfo;
            $("#" + formID + " input[name=ccPostbackUrl]").val(urlWithParams);
            $("#" + formID + " input[name=ccAmount]").val(trainingPrice * i);
            return validate;
        };
    },

    evalSeatCapacity: function(trainingCapacity, trainingCurrentCount) {
        var additionalRegistrantContainer = '.additional-registrations-container';
        var additionalRegistrantTitle = additionalRegistrantContainer + ' div.noBullet.short.space';
        var additionalRegistrantFields = additionalRegistrantContainer + ' div.row';
        var one_registrant = 1;
        var additional_reg_count = parseInt(one_registrant) + parseInt(trainingCurrentCount);

        if (trainingCapacity === additional_reg_count) { // at capacity, additional registrants not allowed
            $(additionalRegistrantTitle).hide();
        }

        // Compute additional registrant fields
        $(additionalRegistrantFields).each(function() {
            if (parseInt(additional_reg_count) < parseInt(trainingCapacity)) {
                ++additional_reg_count;
            } else {
                $(this).hide(); // hide the registrant fields
            }
        });
    }
};

$(document).ready(function() {
    AveryDennison.WrapTrainingRegisterForm.init();
});

if (typeof AveryDennison === 'undefined') {
    var AveryDennison = {};
}

AveryDennison.WrapTrainingRegisterForm = {
    init: function() {

        var trainingName = $('#training-name').data('trainingName');
        var trainingLocation = $('#training-location').data('trainingLocation');
        var postbackUrl = $('#postback-url').data('postbackUrl');
        var trainingPrice = $('#training-price').data('trainingPrice');
        var trainingDate = $('#training-date').data('trainingDate');
        var trainingType = $('#training-type').data('trainingType');
        var trainingProvider = $('#training-provider').data('trainingProvider');
        var trainingInstructor = $('#training-instructor').data('trainingInstructor');
        var trainingPath = $('#training-path').data('trainingPath');
        var trainingCapacity = $('#training-capacity').data('trainingCapacity');
        var trainingCurrentCount = $('#training-current-count').data('trainingCurrentCount');

        var emailTemplate = $('#email-template').data('emailTemplate');
        var confirmationPath = $('#confirmation-path').data('confirmationPath');
        var formID = "wrapTrainingRegistrationForm";
        var errorText = "This field is required.";
        var errorMarkup = "<div class=\"form_row form_error\"><div class=\"form_leftcol\"><div class=\"form_leftcollabel\">";
        errorMarkup = errorMarkup + "<span>&nbsp;</span></div><div class=\"form_leftcolmark\">&nbsp;</div>";
        errorMarkup = errorMarkup + "</div><div class=\"form_rightcol form_error\">" + errorText + "</div></div>";

        var company_name = $("#" + formID + " input[id=company_name]");

        $("#" + formID).submit(function() {
            if (!formvalidate()) {
                return false;
            }
        });

        AveryDennison.WrapTrainingRegisterForm.evalSeatCapacity(trainingCapacity, trainingCurrentCount);

        // Validates all required inputs
        var formvalidate = function() {
            var validate = true;
            var i = 1;
            var mainName = "";
            var mainInfo = "";
            var otherInfo = "";
            var trainingInfo = "";
            var amount;

            trainingInfo = "&trainingName=" + trainingName;
            trainingInfo = trainingInfo + "&" + "trainingLocation=" + trainingLocation;
            trainingInfo = trainingInfo + "&" + "trainingDates=" + trainingDate;
            trainingInfo = trainingInfo + "&" + "trainingType=" + trainingType;
            trainingInfo = trainingInfo + "&" + "trainingProvider=" + trainingProvider;
            trainingInfo = trainingInfo + "&" + "trainingInstructor=" + trainingInstructor;
            trainingInfo = trainingInfo + "&" + "trainingPath=" + trainingPath;
            trainingInfo = trainingInfo + "&" + "company_name=" + company_name.val();

            $("#" + formID + " input.required").each(function() {
                var inputValue = $(this).val();
                mainInfo = mainInfo + "&" + $(this).attr("name") + "=" + inputValue;
                if (inputValue == null || inputValue == "") {
                    $(this).parents(".section.text").append($(errorMarkup));
                    validate = false;
                };
            });

            // if name[n] is not null, email[n] is required
            $("#" + formID + " input[id^=name]").each(function() {
                var inputValue = $(this).val();
                if (inputValue != null && inputValue != "") {
                    i++;
                    var nameId = $(this).attr("id");
                    var num = nameId.substr(nameId.length - 1, 1);
                    if (!isNaN(num)) {
                        var email = $("#" + formID + " input[id=email" + num + "]");
                        otherInfo = otherInfo + "&name" + i + "=" + inputValue + "&email" + i + "=" + email.val();
                        if (email != null && email != "") {
                            if (email.val() == "") {
                                email.parents(".wt-form-input").append($(errorMarkup));
                                validate = false;
                            }
                        }
                    }
                }
            });

            amount = "&amount=" + trainingPrice * i;
            var urlWithParams = postbackUrl + emailTemplate + confirmationPath + trainingInfo + amount + mainInfo + otherInfo;
            $("#" + formID + " input[name=ccPostbackUrl]").val(urlWithParams);
            $("#" + formID + " input[name=ccAmount]").val(trainingPrice * i);
            return validate;
        };
    },

    evalSeatCapacity: function(trainingCapacity, trainingCurrentCount) {
        var additionalRegistrantContainer = '.additional-registrations-container';
        var additionalRegistrantTitle = additionalRegistrantContainer + ' div.noBullet.short.space';
        var additionalRegistrantFields = additionalRegistrantContainer + ' div.row';
        var one_registrant = 1;
        var additional_reg_count = parseInt(one_registrant) + parseInt(trainingCurrentCount);

        if (trainingCapacity === additional_reg_count) { // at capacity, additional registrants not allowed
            $(additionalRegistrantTitle).hide();
        }

        // Compute additional registrant fields
        $(additionalRegistrantFields).each(function() {
            if (parseInt(additional_reg_count) < parseInt(trainingCapacity)) {
                ++additional_reg_count;
            } else {
                $(this).hide(); // hide the registrant fields
            }
        });
    }
};

$(document).ready(function() {
    AveryDennison.WrapTrainingRegisterForm.init();
});

if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function(search, pos) {
            return this.substring(!pos || pos < 0 ? 0 : +pos, search.length) === search;
        }
    });
}
(function($, window, viewport) {

    /*global ResponsiveBootstrapToolkit*/
    "use strict";

    $.fn.avdViewportMoveTo = function(destinationId) {

        var $element = this,
            $destination = $(destinationId),
            initialViewport = viewport.current();

        var _toMobile = function() {
            //window.console.log('moving to mobile');
            $destination.html($element.html()); // set content
            $element.html(''); // empty
        }

        var _toOriginal = function() {
            //window.console.log('moving to original');
            $element.html($destination.html()); // set content
            $destination.html(''); // empty
        }

        // consider initial viewport
        if (initialViewport === 'xs') {
            _toMobile();
        }

        // consider viewport changes
        $(document).on("avd.viewport-changed", function(event, from, to) {

            //window.console.log('caught viewport change! from ' + from + " to " + to);

            if ((from === 'sm' || from === 'md') && to === 'xs') {
                _toMobile();
            } else if (from === 'xs' && (to === 'sm' || to === 'md')) {
                _toOriginal();
            }

        });
    }

    // initial plugin on ready
    $(document).ready(function() {
        //window.console.log('on-mobile-move-to.js');

        $('[data-on-mobile-move-to]').each(function() {
            var $el = $(this),
                destinationID = $el.data('on-mobile-move-to');
            $el.avdViewportMoveTo(destinationID);
        });
    });

})(jQuery, this, ResponsiveBootstrapToolkit);;
// (function ($, window) {
//
//   "use strict";
//
//   $(document).ready(function() {
//     window.console.log("page.js");
//   });
//
// })(jQuery, this);
;
(function($, window, viewport) {

    /* jshint latedef: false */
    /*global ResponsiveBootstrapToolkit*/
    "use strict";

    $.fn.avdViewMore = function() {

        var $viewMoreControl = this.find('.view-more-control'),
            $button = $viewMoreControl.find('.btn'),
            $row = $viewMoreControl.siblings('.row'),
            $columns = $row.find('.avd-column'),
            currentViewport = viewport.current(),

            rowsFirstLoad = $viewMoreControl.data('rows-first-load'),
            rowsAdditionalLoad = $viewMoreControl.data('rows-addl-load'),
            hasInfiniteScroll = $viewMoreControl.hasClass('has-infinite-scroll'),
            viewports = {
                'md': { 'itemsPerRow': null, 'itemsVisible': null, 'finished': false },
                'sm': { 'itemsPerRow': null, 'itemsVisible': null, 'finished': false },
                'xs': { 'itemsPerRow': null, 'itemsVisible': null, 'finished': false }
            },
            $spinner = $viewMoreControl.find('.spinner'),
            $scrollTarget = $viewMoreControl.find('.infinite-scroll-target'),
            $caretDown = $scrollTarget.find('.fa-caret-down'),

            // lock for window scroll event processing
            detectScroll = true;

        // attach click listener for button
        $button.on('click', function(e) {

            var viewport;
            e.preventDefault();

            _setVisibleNext();

            if (!hasInfiniteScroll) {

                // if not infinite scroll, update visibility classes on button
                // as other viewports may still have items to show
                for (viewport in viewports) {
                    if (viewports[viewport].itemsVisible >= $columns.length) {
                        $button.addClass('hidden-' + viewport);
                    }
                }

            } else {
                // otherwise if switching to infinite scroll:
                $button.hide(); // hide this for good
                $caretDown.show(); // show the caret target

                _checkLoader();

                // 3 scroll event handlers: one for each viewport
                for (viewport in viewports) {
                    $(window).on('scroll.avdViewMore.' + viewport, _onScroll);
                }
            }

            return false;
        });

        var _onScroll = function() {
            if (detectScroll) {
                _checkLoader();
            }
        }

        var _setVisibleNext = function() {

            for (var viewport in viewports) {

                var totalVisibleItems = viewports[viewport].itemsVisible +
                    viewports[viewport].itemsPerRow * rowsAdditionalLoad,
                    maxColumnsToShow = Math.min(totalVisibleItems, $columns.length);

                for (var i = viewports[viewport].itemsVisible; i < maxColumnsToShow; i++) {
                    // window.console.log("showing " + i);
                    $($columns[i]).addClass('visible-' + viewport);
                    viewports[viewport].itemsVisible++;
                }
            }

            // optionally re-trigger matchHeight
            if (typeof $.fn.matchHeight === "function" && $columns.first().data('mh')) {
                $.fn.matchHeight._update();
            }
        }

        var _checkLoader = function() {

            // stop further scroll events from firing
            detectScroll = false;

            // first check if we've reached the end for each viewport
            for (var viewport in viewports) {
                if (viewports[viewport].itemsVisible >= $columns.length) {

                    $(window).off('scroll.avdViewMore.' + viewport);
                    viewports[viewport].finished = true;

                    $scrollTarget.addClass('hidden-' + viewport);
                    $spinner.addClass('hidden-' + viewport);
                    $caretDown.addClass('hidden-' + viewport);
                }
            }

            if (_isElementInViewport($scrollTarget) && !viewports[currentViewport].finished) {
                // window.console.log("target in viewport");
                $caretDown.fadeOut(400, function() {
                    $spinner.fadeIn();
                    setTimeout(function() { // mimic a load
                        $spinner.fadeOut(function() {
                            $caretDown.fadeIn();
                            _setVisibleNext();
                            _checkLoader();
                        });
                    }, 400);
                });

            } else {
                // element not in view, so hide spinner and re-enable scroll events
                $spinner.hide();
                detectScroll = true;
            }
        }

        var _isElementInViewport = function(el) {
            if (typeof jQuery === "function" && el instanceof jQuery) {
                el = el[0];
            }

            var rect = el.getBoundingClientRect();

            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= $(window).height() &&
                rect.right <= $(window).width()
            );
        }

        var _showInitialRows = function(viewport) {

            // reset these for each viewport
            var totalWidth = 0,
                itemCount = 0;

            $columns.each(function() {
                var $column = $(this),
                    columnClasses = $column.attr('class'),
                    colWidth = parseInt(columnClasses.substr(columnClasses.indexOf(viewport + '-') + 3, 2), 10);

                totalWidth += colWidth;

                // if still on first row(s), show column and keep counting
                if (totalWidth <= rowsFirstLoad * 12) {
                    $column.addClass('visible-' + viewport);
                    itemCount++;

                    // otherwise, set count for viewport and break out of loop
                } else {
                    viewports[viewport].itemsVisible = itemCount;
                    viewports[viewport].itemsPerRow = itemCount / rowsFirstLoad;
                    return;

                }

            });
            return itemCount;
        }

        var _init = function() {
            for (var viewport in viewports) {
                _showInitialRows(viewport);
            }
        }

        _init();
    }

})(jQuery, this, ResponsiveBootstrapToolkit);;
(function($, window) {

    "use strict";

    $(document).ready(function() {

        window.console.log("column-control.js");

        $('.column-control .has-view-more').each(function() {
            $(this).avdViewMore();
        });

    });

}(jQuery, this));;
(function($, window) {

    "use strict";

    $.fn.avdCaptcha = function() {

        var $captcha = this,
            $img = $captcha.find('img'),
            $key = $captcha.find('input.captcha-key'),
            $refresh = $captcha.find('.captcha-refresh a'),
            startTime = 0,
            timeout = null;

        // captcha refresh and timer
        var _captchaRefresh = function() {
            var newKey = ("" + Math.random()).substring(3, 8),
                newImgSrc = $img.attr('src').split("?")[0] + "?id=" + newKey;

            $img.attr('src', newImgSrc);
            $key.val(newKey);
            startTime = new Date().getTime();
        }

        var _captchaTimer = function() {
            var now = new Date().getTime();
            if ((now - startTime) > 60000) {
                _captchaRefresh();
            }
            var $timer = $captcha.find('.captcha-timer');
            if (!$timer.length) {
                return; // captcha has been removed
            }
            var width = Math.floor((60000 - (now - startTime)) / 60000 * 64);
            $timer.html('<div style="width:' + width + 'px;"></div>');
            timeout = setTimeout(_captchaTimer, 500);
        }

        // Event handlers
        $refresh.on('click', function(event) {
            event.preventDefault();
            _captchaRefresh();
            return false;
        });

        // Start captcha on page load
        _captchaTimer();
    }

    $(document).ready(function() {
        window.console.log('form-captcha.js');
        $('.avd-form .captcha').each(function() {
            $(this).avdCaptcha();
        });
    });

}(jQuery, this));;
(function($, window) {

    "use strict";

    $.fn.avdFormDropdown = function() {
        var $dropdown = $(this),
            $button = $dropdown.find('.btn'),
            $label = $button.find('span'),
            $hiddenField = $dropdown.find('input'),
            $dropdownMenu = $dropdown.find('.dropdown-menu');

        // init
        var value = $hiddenField.val();
        $dropdownMenu.children().each(function(index, element) {
            var $li = $(element);

            $li.removeClass('selected');

            if ($li.data('value') === value) {
                $li.addClass('selected');
                $label.text($li.text());
                return false; // exit loop
            }
        });

        // click event
        $dropdownMenu.on('click', 'li', function() {
            var $li = $(this),
                value = $li.data('value'),
                text = $li.text();
            $hiddenField.val(value);
            $label.text(text);
            $dropdownMenu.children().removeClass('selected');
            $li.addClass('selected');
        });

        $dropdown.on('hide.bs.dropdown', function() {
            // window.console.log("bs hide");
            var $hiddenField = $(this).find('input'),
                valid = $hiddenField.val() !== '';

            if (valid) {
                $button.removeClass('invalid');
                $dropdown.find('span.invalid').text('');
            }
        });
    };

    $.fn.avdFormDropdownTypeahead = function() {

        var lastCountry = '';

        var $dropdown = $(this),
            $input = $dropdown.find('input'),
            $dropdownMenu = $dropdown.find('.dropdown-menu'),
            $dropdownOptions = $dropdown.find('li'),
            optionValues = $dropdownOptions.map(function() { return $(this).text() });



        $input.on('keypress', function(e) {
            if (!$dropdown.hasClass('open')) $dropdown.addClass('open');
        });

        $input.on('click', function(e) {
            if ($dropdown.hasClass('open')) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        $input.on('keyup', function(e) {
            var borderHeight = parseInt($dropdown.parent().css('border-width'));
            var filteredResults = optionValues.filter(function(idx, country) {
                return country.toLowerCase().startsWith($input.val().toLowerCase());
            });
            var firstMatchedCountry = filteredResults[0];
            var $getTargetCountry = $dropdownMenu.find('li[data-value="' + firstMatchedCountry + '"]');
            var targetCountryDistanceToTop = $getTargetCountry.length > 0 ? $getTargetCountry.offset().top : 0;
            var targetCountryheight = $getTargetCountry.outerHeight();
            var dropdownDistanceToTop = $dropdown.offset().top;
            var dropdownMenuScrolled = $dropdownMenu.scrollTop();
            var distanceToScroll = (targetCountryDistanceToTop - targetCountryheight + dropdownMenuScrolled) - dropdownDistanceToTop + borderHeight;
            $dropdownMenu.children().removeClass('selected');
            $getTargetCountry.addClass('selected');

            if (firstMatchedCountry && lastCountry !== firstMatchedCountry && distanceToScroll !== 0) {
                $dropdownMenu.animate({
                    scrollTop: distanceToScroll
                }, 200);
                lastCountry = firstMatchedCountry;
            } else if (!firstMatchedCountry) {
                $dropdownMenu.animate({
                    scrollTop: 0
                }, 200);
                lastCountry = '';
                $dropdownMenu.children().removeClass('selected');
            }
        });

        $dropdownMenu.on('click', 'li', function() {
            var $li = $(this),
                value = $li.data('value');
            $input.val(value);
            $dropdownMenu.children().removeClass('selected');
            $li.addClass('selected');
        });

    };

    $(document).ready(function() {

        window.console.log("dropdown.js");

        $('.dropdown .dropdown-control').each(function() {
            $(this).avdFormDropdown();
        });

        $('.dropdown .dropdown-typeahead').each(function() {
            $(this).avdFormDropdownTypeahead();
        });
    });

})(jQuery, this);;

(function() {

    console.log('connect to firebase');

    // Initialize Firebase
    var firebaseConfig = {

        apiKey: "AIzaSyDbYob_QjKN8M_umN7Ct9OdkEH08y7RF2w",
        authDomain: "ad-form-94890.firebaseapp.com",
        databaseURL: "https://ad-form-94890.firebaseio.com",
        projectId: "ad-form-94890",
        storageBucket: "ad-form-94890.appspot.com",
        messagingSenderId: "458557667857",
        appId: "1:458557667857:web:a50446fc2f126bf6a20fb0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();


    /**
     * Initializes the app.
     */
    var initApp = function() {

        const fileButton = document.getElementById('formFile');
        const inputfile = document.getElementById('cvname');
        if (!!fileButton) {

            fileButton.addEventListener('change', function(e) {



                var fileName = e.target.files[0].name;
                inputfile.value = fileName;
                uploadFile(e.target.files[0]);

            });
        }


    };

    function uploadFile(file) {


        var metadata = {

            contentType: file.type,
        };
        var uploadTask = firebase.storage().ref('cv/' + file.name).put(file, metadata);


    }


    window.addEventListener('load', initApp);

}());

(function($, window) {

    /*jshint unused:false*/
    "use strict";

    $.fn.avdFormSubmission = function() {

        var $form = this,
            $submitButton = $form.find('input[type="submit"]'),
            $modal = $form.find('.modal'),
            hasMatchHeight = $form.find('[data-mh]').length > 0,
            $errorMessageText = $form.find('.error-message-text'),
            submitAjax = $form.data('submitAjax'),
            redirectOnSuccess = $form.data('redirect');

        if ($errorMessageText.length > 0) $errorMessageText.hide();

        var _submitHandler = function() {
            var btnsubmit = document.getElementById('btnsubmit');
            document.getElementById('loading').style.display = 'block';
            btnsubmit.setAttribute("disabled");
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbyaYKFXpF2HTFl-EgEQXhLHXSSrlUA9kSO4UULTcvxGAKp5z_ksbmjnNp16nczD8NSJCg/exec",
                data: $("#register-form").serialize(),
                method: "post",
                success: function(response) {
                    alert("Success!");
                    document.getElementById('loading').style.display = 'none';


                },
                error: function(err) {
                    alert("Something Error! Please try again. ");
                    document.getElementById('loading').style.display = 'none';
                    btnsubmit.setAttribute("disabled", "false");
                }
            });
        };

        var _toggleSubmit = function($submitButton) {
            if (typeof $submitButton !== 'undefined') {
                $submitButton.attr('disabled', 'true');
            }
        };

        var _invalidHandler = function() {

            // this callback fires before the form is re-drawn,
            // so we wrap in a timeout of 100ms

            if ($errorMessageText.length > 0 || $form.find('label.error').length > 0) {
                $form.find('label.error').remove();
                $errorMessageText.show();
            }

            setTimeout(function() {
                if (hasMatchHeight) {
                    $.fn.matchHeight._update();
                }

                $form.find('.pulldown').each(function() {
                    var $pulldown = $(this);
                    if ($pulldown.find('input').hasClass('invalid')) {
                        $pulldown.find('.dropdown-toggle').addClass('invalid');
                    } else {
                        $pulldown.find('.dropdown-toggle').removeClass('invalid');
                    }
                });
            }, 100);
        };

        var _validateCaptcha = function() {

            var $captcha = $form.find('.captcha'),
                $errorSpan = $captcha.find('span.invalid-captcha'),
                msg = $errorSpan.data('msg');

            var $googleCaptcha = $form.find('.google-recaptcha');

            $errorSpan.hide();

            if (!$captcha.length && !$googleCaptcha.length) {
                _submitHandler();
                return; // no captcha, so its validation is ok
            }

            if ($captcha.length) {
                var requestParameters = ':cq:captchakey=' + $form.find('[name=":cq:captchakey"]').val() +
                    '&:cq:captcha=' + $form.find('[name=":cq:captcha"]').val() +
                    '&:cq_csrf_token=' + $form.find('[name=":cq_csrf_token"]').val();

                $.ajax({
                    type: 'GET',
                    url: '/bin/avery-responsive/captcha-verify.json',
                    data: requestParameters

                }).success(function(data, textStatus, jqXHR) {
                    _submitHandler(); // continue!

                }).fail(function( /*jqXHR, textStatus, errorThrown*/ ) {
                    window.console.log("captcha verify failed");

                    $form.find('.captcha input.form-control').addClass('invalid');
                    $errorSpan.text(msg).show();

                }); // end Ajax call
            }

            if ($googleCaptcha.length && doSubmit) {
                _submitHandler(); // continue!
            }
        };

        $form.validate({
            focusInvalid: false,
            errorClass: 'invalid',
            errorElement: 'span',
            invalidHandler: _invalidHandler,
            submitHandler: _validateCaptcha,
            onkeyup: function(element) {
                $(element).valid();
                if (hasMatchHeight) {
                    $.fn.matchHeight._update();
                }
            },
            onfocusout: function(element) {
                $(element).valid();
                if (hasMatchHeight) {
                    $.fn.matchHeight._update();
                }
            }
        });
    }

    $(document).ready(function() {
        window.console.log("form-submission.js");
        $('form.avd-form').each(function() {
            $(this).avdFormSubmission();
        });
    });

})(jQuery, this);;
/* jshint ignore:start */
// Code here will be ignored by JSHint.
// $("#register-form").submit((e) => {
//     e.preventDefault()

// });
(function($, window) {

    var hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints;

    $(document).ready(function() {

        window.console.log('globalheader.js');

        /*
        START NAV
        */
        if ($(".mainNav").length) {
            var divToDrop;
            var divLinkActive;
            var objectOffset;
            var timeoutDuration = 200;
            var slideDownDuration = 200;
            var fadeOutDuration = 198; // must be less than timeoutDuration
            function putDropOnStartTimer(startLink, state) {
                if (($(startLink).hasClass("noDrop"))) {
                    return true;
                }
                divToDrop = startLink.next('.mainNavDropContainer');
                var timeout = $(this).data("timeout");
                if (timeout) clearTimeout(timeout);
                if (state == "start") {
                    $(this).data("timeout", setTimeout($.proxy(function() {
                        startDropDown(startLink, divToDrop);
                    }, this), timeoutDuration));
                } else {
                    clearTimeout(timeout);
                }
            }

            function startDropDown(startLink, divToDrop) {
                $(".mainNavDropContainer").fadeOut(fadeOutDuration);
                $(".mainNav ul li a.navLink").off('mouseenter mouseleave');
                objectOffset = $(startLink).parent().closest("li").position();

                $(divToDrop).css('left', -objectOffset.left).slideDown(slideDownDuration);
                if (!($(startLink).hasClass("noDrop"))) {
                    $(startLink).addClass("active");
                }

                setTimeout(function() {
                    $(startLink).parent().hover(
                        function() {},
                        function() {
                            $(divToDrop).fadeOut(fadeOutDuration);
                            setTimeout(function() { $(".mainNav ul li a").removeClass("active"); }, fadeOutDuration - 75);
                            bindUm();
                        });
                }, slideDownDuration);
            }


            //Setup Nav triggers and placement
            function bindUm() {
                $(".mainNav ul li a.navLink").each(function() {
                    if (!hasTouch) {
                        $(this).hover(
                            function() { putDropOnStartTimer($(this), "start") },
                            function() { putDropOnStartTimer($(this), "stop") }
                        );
                    } else {
                        // attach click event for touch tablet or desktop - size
                        $(this).on('click', function(event) {
                            event.preventDefault();
                            var $navLink = $(this),
                                $menu = $navLink.siblings('.mainNavDropContainer');

                            if ($menu.is(':visible')) {
                                $menu.fadeOut(fadeOutDuration, function() {
                                    $navLink.removeClass("active");
                                });
                            } else {
                                putDropOnStartTimer($navLink, "start");
                            }

                            return false;
                        })
                    }
                });
            }

            bindUm();

            // END NAV

        }
    });

})(jQuery, this);

/* jshint ignore:end */
;
(function($, window) {

    "use strict";

    var hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints;

    // jQuery plugin to add nav link inside dropdown for Tablet
    $.fn.avdAddNavLinkToDropdown = function() {
        var $header = this,
            $navItems = $header.find('.mainNav .navLinks').children();

        $navItems.each(function() {
            var $navItem = $(this),
                $link = $navItem.find('.navLink').clone(),
                $dropDown = $navItem.find('.mainNavDropContainer .mainNavDrop');

            $dropDown.addClass('has-touch'); // to accomodate extra element

            $link
                .removeClass('currentSection')
                .prepend('<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>');
            if ($link[0] != null) {
                var html = '<div class="navDropLinkTablet"> ' + $link[0].outerHTML + '</div>';
                $dropDown.prepend(html);
            }
        });
    }

    $.fn.avdHeaderSearch = function() {
        var $target = this,
            expandRegion = $target.parent().children('.expandThis');

        var _expand = function() {
            var searchWidth = parseInt(expandRegion.css('width'), 10);
            if (searchWidth < 26) {
                expandRegion.animate({ width: 183 }, 250); //.focus();
            }
        }

        var _init = function() {
            $target.one('click', _expand);
        }

        _init();
    }

    $(document).ready(function() {

        window.console.log('header-legacy.js');

        // automatic z-index assignment
        if ($("#worldwideSites_mainContainer").length) {
            var zIndexNumber = 1000;
            $('#worldwideSites_sectionLinks li').each(function() {
                $(this).css('zIndex', zIndexNumber);
                zIndexNumber -= 10;
            });
        }

        /*Start WORLDWIDE SITES TOGGLE*/
        $('#toggleMenu, #toggleMenu2').click(function() {
            $('#worldwideSites_mainContainer').slideToggle('slow', function() { // Animation complete.
            });
        });

        $('#toggleClose').click(function() {
            $('#worldwideSites_mainContainer').slideUp('slow', function() { // Animation complete.
            });
        });

        $("#toggleMenu, #toggleMenu2").click(function() {
            $(this).toggleClass("selected");
        });

        $("#toggleClose").click(function() {
            $('#toggleMenu, #toggleMenu2').toggleClass("selected");
        });

        // Set current Language
        var currentLanguage = $('#currentLanguage').val();

        if (currentLanguage) {
            $('#toggleMenu2').hide();
            $('.languageSelected').show();
            $('#toggleMenu').show();
            $('#toggleMenu').next().addClass('leftBorder');
        } else {
            $('#toggleMenu').hide();
            $('#toggleMenu2').show();
            $('.languageSelected').hide();
            $('#toggleMenu').next().removeClass('leftBorder');
        }

        // init expandable search bar
        $('.avd-legacy .topNav .expandSearch').each(function() {
            $(this).avdHeaderSearch();
        });

        // Setup Nav triggers and placement
        // $('.mainNav').avdHeaderNavDropdowns();

        // add clickable top-level nav items if device is touch
        if (hasTouch) {
            $('.avd-legacy .globalheader').avdAddNavLinkToDropdown();
        }
    });

})(jQuery, this);;
(function($, window, viewport) {

    /*global ResponsiveBootstrapToolkit*/
    "use strict";

    $.fn.avdSquareImage = function() {

        var $image = this,
            $div = $image.closest('.image');

        var _setSize = function() {
            window.console.log("setting size");

            var width = $div.width(),
                height = $div.height();

            if (height != width) {
                $div
                    .css('height', width + 'px')
                    .css('overflow', 'hidden');
            }

            $image.show();
        }

        // consider initial state
        _setSize();

        // consider resizing on mobile viewport
        $(window).on('resize', function() {
            if (viewport.is('xs')) {
                _setSize();
            }
        });

        // consider when viewport changes
        $(document).on("avd.viewport-changed", function() {
            _setSize();
        });
    }

    $(document).ready(function() {
        window.console.log('image.js');
        $('.image .square').each(function() {
            $(this).avdSquareImage();
        });
    });


})(jQuery, this, ResponsiveBootstrapToolkit);;
(function($, window) {

    "use strict";

    $(document).ready(function() {

        window.console.log("instagram-feed.js");

        $('.instagram-feed-wrapper').each(function() {

            var $instagram = $(this),
                $instagramPhotos = $(this).find('.instagram-photos'),
                $status = $instagram.find('.status'),
                $template = $instagram.find('.template'),
                parameters = {
                    'pagepath': $instagram.data('pagepath')
                };

            // ajax call to AEM servlet to fetch instagram JSON
            $.ajax({
                type: "GET",
                url: $instagram.data('servlet'),
                data: parameters

            }).success(function(data, textStatus, jqXHR) { /*jshint unused:false*/

                /* globals JSON */
                var json = data;
                if (typeof data === 'string') {
                    json = JSON.parse(data);
                }

                for (var i = 0; i < json.length; i++) {

                    var $photo = $template.clone();
                    $photo.find('.photo-cover').css('background-image', 'url(' + json[i].standard + ')');
                    $photo.find('a')
                        .attr('href', json[i].permalink)
                        .attr('title', json[i].caption);
                    $photo.find('img')
                        .attr('src', json[i].standard)
                        .attr('alt', json[i].caption);

                    $instagramPhotos.append($photo);
                }

                // show all at once
                $instagramPhotos.find('.template').removeClass('template');

                $status.remove();

            }).fail(function( /*jqXHR, textStatus, errorThrown*/ ) {
                window.console.log("fail");
                $status.find('.loading').hide();
                $status.find('.error').show();

            }).always(function() {
                $template.remove();

            });
        });
    });

}(jQuery, this));;
(function($, window) {

    "use strict";

    $(document).ready(function() {

        window.console.log("list.js");

        $('.list .has-view-more').each(function() {
            $(this).avdViewMore();
        });

    });

}(jQuery, this));;
(function($, window) {

    "use strict";

    $(document).ready(function() {

        $('.galleryCollection .has-view-more').each(function() {
            $(this).avdViewMore();
        });

    });

}(jQuery, this));;
(function($, window) {

    /* globals ga */
    "use strict";

    $.fn.avdNewsletterSignUp = function() {

        var $newsletterSignUp = this,
            $modal = $newsletterSignUp.find('.modal'),
            $formContainer = $modal.find('.newsletter-signup-form'),
            $form = $formContainer.find('form'),
            $thankYou = $modal.find('.newsletter-signup-thank-you'),

            $buttons = $modal.find('.newsletter-signup-buttons'),
            $submitButton = $buttons.find('.submit .btn'),
            $closeButton = $buttons.find('.close .btn'),
            $errorText = $modal.find('.newsletter-signup-error-text'),
            invalidFieldsText = $errorText.data('invalid-fields-text'),
            formSubmissionErrorText = $errorText.data('servlet-error-text'),

            $captchaImg = $form.find('.captcha img'),
            $captchaKey = $form.find('.captcha input.captcha-key'),
            $captchaRefresh = $form.find('.captcha .captcha-refresh a'),
            $captchaField = $form.find('.captcha input.captcha-code'),
            captchaStartTime = 0,
            captchaTimeout = null,

            $firstNameField = $form.find('input[name="fieldA"]'),
            $lastNameField = $form.find('input[name="fieldB"]'),
            $emailField = $form.find('input[name="fieldC"]'),
            $optionalField = $form.find('input[name="fieldD"]'),

            $googleCaptcha = $form.find('#rcaptcha');

        var _validateGoogleCaptcha = function($field) {
            if ($field) {
                return doSubmit;
            } else {
                return true;
            }

        }

        var _validateField = function($field) {
            if ($field.length > 0) { // make sure the field is present
                if ($field.hasClass("required")) {
                    var hasText = $field.val() !== "";
                    if (hasText) {
                        $field.removeClass('invalid');
                    } else {
                        $field.addClass('invalid');
                    }
                    return hasText;
                }
            }
            return true;
        }

        var _validateEmail = function($field) {
            if (_validateField($field)) {
                var emailText = $field.val(),
                    regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    isValidEmail = regexp.test(emailText);

                if (isValidEmail) {
                    $field.removeClass('invalid');
                } else {
                    $field.addClass('invalid');
                }

                return isValidEmail
            }
            return false;
        }

        var _validateCheckboxes = function() {
            var valid = false;
            $('.choose-newsletter').removeClass('invalid');
            $form.find('input.checkbox').each(function() {
                if ($(this).is(":checked")) {
                    valid = true;
                    return false; // break out of loop
                }
            });
            if (!valid) {
                $('.choose-newsletter').addClass('invalid');
            }
            return valid;
        }

        var _validateFields = function() {
            return _validateCheckboxes() &&
                _validateField($firstNameField) &&
                _validateField($lastNameField) &&
                _validateEmail($emailField) &&
                _validateField($optionalField) &&
                _validateField($captchaField) &&
                _validateGoogleCaptcha($googleCaptcha);
        }

        var _processForm = function() {

            // reset errors
            $errorText.addClass('clean');

            // validate the things
            if (!_validateFields()) {
                $errorText.text(invalidFieldsText).removeClass('clean');
                return false;
            }

            // prepare form
            var servlet = $form.attr('action'),
                formData = $form.serialize();

            // post form
            $.ajax({
                type: 'POST',
                url: servlet,
                data: formData,
                success: function() {
                    ga('send', 'event', 'Newsletter Signup', 'Submit', 'Success');

                    // update UI
                    $formContainer.fadeOut(500, function() {
                        $thankYou.fadeIn();
                        $submitButton.hide();
                        $closeButton.show();
                    });
                },
                error: function(jqXHR, exception) {
                    if (jqXHR.status === 0) {
                        window.console.log('Not connect.\n Verify Network.');

                    } else if (jqXHR.status == 404) {
                        window.console.log('Requested page not found. [404]');

                    } else if (jqXHR.status == 500) {
                        $errorText.text(formSubmissionErrorText).removeClass('clean');

                    } else if (exception === 'parsererror') {
                        window.console.log('Requested JSON parse failed.');

                    } else if (exception === 'timeout') {
                        window.console.log('Time out error.');

                    } else if (exception === 'abort') {
                        window.console.log('Ajax request aborted.');

                    } else {
                        window.console.log('Uncaught Error.\n' + jqXHR.responseText);

                    }
                }
            });
        }

        // captcha refresh and timer
        var _captchaRefresh = function() {
            var newKey = ("" + Math.random()).substring(3, 8),
                newImgSrc = $captchaImg.attr('src').split("?")[0] + "?id=" + newKey;

            $captchaImg.attr('src', newImgSrc);
            $captchaKey.val(newKey);
            captchaStartTime = new Date().getTime();
        }

        var _captchaTimer = function() {
            var now = new Date().getTime();
            if ((now - captchaStartTime) > 60000) {
                _captchaRefresh();
            }
            var $timer = $form.find('.captcha .captcha-timer');
            if (!$timer.length) {
                return; // captcha has been removed
            }
            var width = Math.floor((60000 - (now - captchaStartTime)) / 60000 * 64);
            $timer.html('<div style="width:' + width + 'px;"></div>');
            captchaTimeout = setTimeout(_captchaTimer, 500);
        }

        // Event handlers
        $captchaRefresh.on('click', function(event) {
            event.preventDefault();
            _captchaRefresh();
            return false;
        });

        $submitButton.on('click', function() {
            event.preventDefault();
            _processForm();
            return false;
        });

        // Start captcha when opening modal
        $modal.on('show.bs.modal', function() {
            captchaTimeout = null;
            captchaStartTime = 0;
            _captchaTimer();
        });

        // Stop captcha when closing modal
        $modal.on('hide.bs.modal', function() {
            clearTimeout(captchaTimeout);
        });

    }

    $(document).ready(function() {
        window.console.log('newsletter.js');
        $('.newsletter-signup').each(function() {
            $(this).avdNewsletterSignUp();
        });
    });

}(jQuery, this));;
(function($, window) {

    "use strict";

    $(document).ready(function() {

        window.console.log("photoset.js");

        $('.photoset .photoset-slider-arrow').unslider({
            nav: false,
            speed: 500,
            arrows: {
                prev: '<a class="unslider-arrow prev"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
                next: '<a class="unslider-arrow next"><i class="fa fa-angle-right" aria-hidden="true"></i></a>'
            }
        });
        $('.photoset .photoset-slider-dots').unslider({
            nav: false,
            speed: 500,
            dots: true,
            arrows: false
        });
    });

}(jQuery, this));;;
// (function ($, window) {
//
//   "use strict";
//
//   $.fn.avdSharePopup = function (e, width, height, resize) {
//     // prevent default anchor event
//     e.preventDefault();
//
//     // set title and open popup with focus on it
//     var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
//         strParam = 'width=' + width + ',height=' + height + ',resizable=' + resize;
//         window.open(this.attr('href'), strTitle, strParam).focus();
//
//     return false;
//   }
//
//   $(document).ready(function ($) {
//     window.console.log("share-page.js");
//
//     // share to twitter
//     $('.share-page-twitter').on("click", function(e) {
//       $(this).avdSharePopup(e, 800, 400, 'no');
//     });
//
//     // share to linkedin
//     var $li = $('.share-page-linkedin');
//     // update href with url of current page
//     $li.attr('href', $li.attr('href') + window.location);
//     $li.on("click", function(e) {
//       $(this).avdSharePopup(e, 600, 400, 'no');
//     });
//
//   });
//
// }(jQuery, this));
;
(function($, window, viewport) {

    /*global ResponsiveBootstrapToolkit*/
    "use strict";

    $.fn.avdCalloutAdjustHeight = function() {

        var $callout = this,
            $columnControl = $callout.closest('.column-control'),
            $image = $columnControl.find('img'),
            $imageContainer = $image.parent(),
            imageRatio = $image.width() / $image.height();

        var _resizeCallout = function() {
            var difference = Math.abs($callout.height() - $image.height());
            $callout
                .css('padding-top', difference / 2 + 'px')
                .css('padding-bottom', difference / 2 + 'px');
        }

        var _updateDimensions = function() {

            if ($callout.height() > $image.height()) {
                // the inner content of the callout is taller than the image,
                // so resize the image

                // set smaller padding
                $callout
                    .css('padding-top', '20px')
                    .css('padding-bottom', '20px');

                // prevent ugly overflow
                $imageContainer.css('overflow', 'hidden');

                // and update the image
                var newImageWidth = $callout.outerHeight() * imageRatio,
                    newImageHeight = $callout.outerHeight();

                $image
                    .css('height', newImageHeight + 'px')
                    .css('width', newImageWidth + 'px');

                if (newImageWidth < $imageContainer.width()) {
                    $image.css('width', $imageContainer.width() + 'px');
                    _resizeCallout();
                }

            } else {
                // the image is taller, so we resize the callout
                _resizeCallout();
            }

            $.fn.matchHeight._update();
        }

        var _resetDimensions = function() {
            $image.removeAttr('style');
            $imageContainer.removeAttr('style');
            $callout.removeAttr('style');
        }

        // kick off on image load
        $columnControl.imagesLoaded(function() {
            if (!viewport.is('xs')) { // don't do it for mobile
                _updateDimensions();
            }
        });

        // consider when viewport changes
        $(document).on("avd.viewport-changed", function(event, from, to) {
            // window.console.log('viewport to ' + to);
            if (to === 'xs') {
                _resetDimensions();
            } else {
                _updateDimensions();
            }
        });

    }

    $(document).ready(function() {
        window.console.log('text-callout.js');
        $('.column-control .text .callout.callout-adjust-height').each(function() {
            $(this).avdCalloutAdjustHeight();
        });
    });

})(jQuery, this, ResponsiveBootstrapToolkit);;
(function($, window) {

    "use strict";

    $(document).ready(function() {

        window.console.log("twitter-feed.js");

        $('.twitter-feed-wrapper').each(function() {

            var $twitter = $(this),
                $status = $twitter.find('.status'),
                $template = $twitter.find('.template'),
                parameters = {
                    'username': $twitter.data('username')
                };

            if ($twitter.data('num-tweets')) {
                parameters.numTweets = $twitter.data('num-tweets');
            }

            // ajax call to AEM servlet to fetch twitter JSON
            $.ajax({
                type: "GET",
                url: $twitter.data('servlet'),
                data: parameters

            }).success(function(data, textStatus, jqXHR) { /*jshint unused:false*/

                /* globals JSON */
                var json = data;
                if (typeof data === 'string') {
                    json = JSON.parse(data);
                }

                var tweets = json.tweets,
                    name = json.name,
                    user = json.screenName;

                for (var i = 0; i < tweets.length; i++) {

                    var $tweet = $template.clone();

                    $tweet.find('.message p').html(tweets[i].message);
                    $tweet.find('.meta .permalink')
                        .text(tweets[i].timestamp)
                        .attr('href', tweets[i].permalink);
                    $tweet.find('.meta .name').html(name);
                    $tweet.find('.meta .user')
                        .text(user)
                        .attr('href', 'https://twitter.com/' + user);

                    if (tweets[i].image) {
                        $tweet.addClass('has-media');
                        $tweet.find('.message .media img').attr('src', tweets[i].image);
                    } else {
                        $tweet.addClass('no-media');
                        $tweet.find('.message .media').remove();
                    }

                    $twitter.append($tweet);
                }

                // show all at once
                $twitter.find('.template').removeClass('template')

                $status.remove();

            }).fail(function( /*jqXHR, textStatus, errorThrown*/ ) {
                window.console.log("fail");
                $status.find('.loading').hide();
                $status.find('.error').show();

            }).always(function() {
                $template.remove();

            });
        });
    });

}(jQuery, this));;
(function($, window) {

    /* globals jwplayer,ga */
    "use strict";

    $.fn.avdJwVideoPlayer = function() {

        var $playerElem = this,
            isModal = $playerElem.parents('.modal').length > 0,
            isEmbed = !isModal,
            videoId = $playerElem.attr('id'),
            autostart = $playerElem.data('autostart') ? true : false,
            preview = $playerElem.data('preview'),
            file = $playerElem.data('file'),
            containerWidth = $playerElem.outerWidth(),
            fullWidth = '100%',
            maxHeight = null,
            ratio = null,
            previewImage = null,
            modalLoaded = false,
            player = null;

        var _resize = function() {
            // update the container width
            containerWidth = $('#' + videoId).outerWidth()

            var newHeight = previewImage.height;

            if (containerWidth < previewImage.width) {
                newHeight = containerWidth / ratio;
            }

            if (newHeight <= maxHeight) {
                player.resize(fullWidth, newHeight);
            }
        }

        var _loadPlayer = function() {

            previewImage = new Image();
            previewImage.src = preview;

            $(previewImage).one('load', function() {
                ratio = previewImage.width / previewImage.height;
                maxHeight = previewImage.height;

                var initialHeight = maxHeight;
                if (containerWidth < previewImage.width) {
                    initialHeight = containerWidth / ratio;
                }

                player = jwplayer(videoId);

                // set up the jwplayer



                player.setup({
                    autostart: autostart,
                    height: initialHeight,
                    width: fullWidth,
                    image: preview,
                    file: file,
                    mute: true

                });

                // analytics
                player.onPlay(function() {
                    if (typeof ga !== 'undefined') {
                        ga('send', 'event', 'Videos', 'Play', file);
                    }
                });

                $(window).on('resize', function() {
                    _resize();
                });
            });
        }

        if (isEmbed) {
            _loadPlayer();

        } else {

            var $modal = $playerElem.closest('.modal');

            // attach event when opening the modal
            $modal.on('shown.bs.modal', function() {
                if (!modalLoaded) {
                    // now that the modal is visible, we can grab the containerWidth
                    containerWidth = $playerElem.outerWidth();
                    _loadPlayer();
                    modalLoaded = true;
                }
            });

            $modal.on('hide.bs.modal', function() {
                if (player.getState().toLowerCase() === 'playing') {
                    player.pause();
                }
            });
        }
    }

    $(document).ready(function() {
        window.console.log('video.js');
        $('.avd-jw-video-player').each(function() {
            $(this).avdJwVideoPlayer();
        });
    });

}(jQuery, this));;
(function($, window) {

    "use strict";

    $.fn.avdYouTubeModalEmbed = function() {

        var $modal = this,
            $iframe = this.find('.youtube-embed').find('iframe'),
            iframeContentWindow = $iframe[0].contentWindow,
            started = false; // keep flag for each modal

        // attach event when opening the modal
        $modal.on('show.bs.modal', function() {
            // only play video on the initial load
            if (!started) {
                iframeContentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                started = true;
            }
        });

        // attach event when closing the modal
        $modal.on('hide.bs.modal', function() {
            // pause the video
            iframeContentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });
    }

    $(document).ready(function() {
        window.console.log('youtube.js');
        $('.youtube-player .youtube-modal .modal').each(function() {
            $(this).avdYouTubeModalEmbed();
        });
    });

}(jQuery, this));
(function($, window) {

    "use strict";

    $(document).ready(function() {

        window.console.log("bxslider.js");

        $('.bxslider').bxSlider({
            mode: 'horizontal',
            infiniteLoop: true,
            adaptiveHeight: true,
            auto: true,
            autoStart: true,
            autoDirection: 'next',
            autoHover: true,
            pause: 3000,
            autoControls: false,
            pager: true,
            pagerType: 'full',
            controls: true,
            captions: true,
            speed: 500
        });

    });

}(jQuery, this));
(function($, window) {

    "use strict";

    $(document).ready(function() {
        window.console.log("carsoul   .js");

        if ($("#modal-carousel").length > 0) {


            /* activate the carousel */
            $("#modal-carousel").carousel({ interval: false });

            /* change modal title when slide changes */
            $("#modal-carousel").on("slid.bs.carousel", function() {
                $(".modal-title")
                    .html($(this)
                        .find(".active img")
                        .attr("title"));
            });

            /* when clicking a thumbnail */
            $(".row .thumbnails").click(function() {
                var content = $(".carousel-inner");
                var title = $(".modal-title");

                content.empty();
                title.empty();

                var id = this.id;
                var repo = $("#img-repo .item");
                var repoCopy = repo.filter("#" + id).clone();
                var active = repoCopy.first();

                active.addClass("active");
                title.html(active.find("img").attr("title"));
                content.append(repoCopy);

                // show the modal
                $("#modal-gallery").modal("show");
            });
        }


    });

}(jQuery, this));

/* Photoset component */
var id;
$('.photoset-slider .photoset-img').click(function() {
    id = $(this).attr('id');
    modal = document.getElementById("photosetModal-" + id);
    if (modal) {
        modal.style.display = "block";
    }
});
var idDot;
$('.li-dot').click(function() {
    idDot = $(this).attr('id');
    $(".photoset-img").hide();
    $(".slide-text").hide();
    $(".caption-" + idDot).show();
    $("#photoset-" + idDot).show();
    $('.photoset-slider li').removeClass('unslider-active');
    $("#" + idDot).toggleClass('unslider-active');
});
$(".modal-dialog .modal-header .close").click(function() {
    modal = document.getElementById("photosetModal-" + id);
    if (modal) {
        modal.style.display = "none";
    }
});

/* Photo Gallery */
$(document).ready(function() {
    /*Start Image Galleries*/
    if ($(".imageGallery").length) {
        $(".imageGallery").each(function() {
            var imgIndex;
            var imageLink;
            var imgOffset;
            var animationLength = 280;
            var targetSlide = $(this).children(".display");
            var targetInfo = $(this).children(".info");
            var targetSlideText;
            var galleryh6 = "";
            var galleryh2 = "";
            var galleryb4 = "";
            var dottedHeight = $(this).children(".icons").children("img").css('height');
            $(this).children(".icons").children(".dottedOver").css("height", dottedHeight);
            $(this).children(".icons").children("img").click(function() {
                imgIndex = $(this).index();
                imgOffset = $(this).position();

                var newdottedHeight = $(this).parent().children("img").css('height');
                $(this).parent().children(".dottedOver").css("left", imgOffset.left).css("top", imgOffset.top).css("height", newdottedHeight);
                $(this).parent(".icons").children("img").stop(true, true).animate({
                    opacity: .3
                }, animationLength);
                $(this).stop(true, true).css("opacity", 1);
                targetSlide.children("div").fadeOut(0);
                targetSlide.children("div").eq(imgIndex).stop(true, true).fadeIn(animationLength);

                targetSlideText = $(this).parents(".imageGallery").children(".display").children("div").eq(imgIndex);
                if (targetSlideText.children(".infoh6").length) {
                    galleryh6 = targetSlideText.children(".infoh6").html();
                }
                if (targetSlideText.children(".infoh2").length) {
                    galleryh2 = targetSlideText.children(".infoh2").html();
                }
                if (targetSlideText.children(".infob5").length) {
                    galleryb4 = targetSlideText.children(".infob5").html();
                }
                targetInfo.stop(true, true).animate({
                    opacity: 0
                }, 0);
                setTimeout(function() {
                    targetInfo.children("h6").html(galleryh6);
                    targetInfo.children("h2").html(galleryh2);
                    if (targetInfo.children(".bodyTextBold").length) {
                        targetInfo.children(".bodyTextBold").html(galleryb4);
                    }
                    targetInfo.stop(true, true).animate({
                        opacity: 1
                    }, animationLength);
                }, animationLength);

            });

        });
    }
});


$(document).ready(function() {
    var authoredSpeed;
    if ($(".slideShowID").length > 0) {
        var slideShowID = '#' + $(".slideShowID").val();

        var imgHeight = $(slideShowID + ' .pagination').children('li:first-child').children('a').children('img').css("height");
        var imgWidth = $(slideShowID + ' .pagination').children('li:first-child').children('a').children('img').css("width");
        var imgOffset = $(slideShowID + ' .pagination').position();

        $(slideShowID + ' .pagination .dottedOver').css("left", imgOffset.left).css("top", imgOffset.top);
        $(slideShowID + ' .pagination .dottedOver').css("height", imgHeight).css("width", imgWidth);

        if ($(slideShowID + ' .speed').val()) {
            authoredSpeed = $(slideShowID + ' .speed').val();
        } else { authoredSpeed = 5000; }

        $(slideShowID).slides({

            preload: true,
            preloadImage: '/includes/img/ui/loading.gif',

            effect: 'fade',
            crossfade: true,
            slideSpeed: 350,
            fadeSpeed: 500,
            generateNextPrev: false,
            generatePagination: false,
            play: authoredSpeed,
            pause: 2500,
            hoverPause: true,
            animationStart: function(current) {

                $(slideShowID + ' .info').animate({
                    delay: 0,
                    opacity: 0
                }, 100);

            },
            animationComplete: function(current) {

                var imgIndex = $(slideShowID + ' .pagination .current').index();
                var imgOffset = $(slideShowID + ' .pagination').children('li.current').children('a').children('img').position();
                var imgHeight = $(slideShowID + ' .pagination').children('li.current').children('a').children('img').css("height");
                var imgWidth = $(slideShowID + ' .pagination').children('li.current').children('a').children('img').css("width");
                var animationLength = 0;

                $(slideShowID + ' .pagination .dottedOver').css("left", imgOffset.left).css("top", imgOffset.top);
                $(slideShowID + ' .pagination .dottedOver').css("height", imgHeight).css("width", imgWidth);

                var currentTextA = $(slideShowID + ' .slides_container .slides_control').children().eq(imgIndex).children('.infoh6').text();
                var currentTextB = $(slideShowID + ' .slides_container .slides_control').children().eq(imgIndex).children('.infoh2').text();

                $(slideShowID + ' .info').children('h6').text(currentTextA);
                $(slideShowID + ' .info').children('h2').text(currentTextB);

                $(slideShowID + ' .info').animate({
                    delay: 500,
                    opacity: 1
                }, 700);

                if (window.console && console.log) {
                    // example return of current slide number
                    //console.log('animationComplete on slide: ', current);
                };
            },
            slidesLoaded: function() {

                $(slideShowID + ' .info').children('h6').text($(slideShowID + ' .slides_container .slides_control').children().eq(0).children('.infoh6').text());
                $(slideShowID + ' .info').children('h2').text($(slideShowID + ' .slides_container .slides_control').children().eq(0).children('.infoh2').text());


                //$('.info').animate({
                $(slideShowID + ' .info').animate({
                    opacity: 1
                }, 300);


            }
        });
    }

});

/* HEADER RESPONSIVE - WORLD WIDE OFFICES */
$('.wwo-accordion a.wwo-option').click(function(e) {
    var $this = $(this);
    var id = $this.attr('id');
    var parent = $this.attr('data-parent');
    var text = $this.text();

    // is global business
    if (!parent) {
        var $link = $('#globalBusiness').find('a.toggle')
        var $icon = $link.find('i');
        $link.text(text).append($icon);
        var updatedLangs = false;
        $('ul.wwo-accordion').find('#globalRegion li').each(function(index) {
            $(this).removeClass('hidden');
            if ($(this).find('a').attr('data-parent') != id) {
                $(this).addClass('hidden');
            }
        });
        $('ul.wwo-accordion').find('#globalRegion a.toggle').click();
    }
    //is global region
    else if ($this.parent().parent().parent('#globalRegion').length > 0) {
        var $link = $('#globalRegion').find('a.toggle')
        var $icon = $link.find('i');
        $link.text(text).append($icon);
        $('ul.wwo-accordion').find('#globalLanguage li').each(function(index) {
            $(this).removeClass('hidden');
            if ($(this).find('a').attr('data-parent') != id) {
                $(this).addClass('hidden');
            }
        });
        $('ul.wwo-accordion').find('#globalLanguage a.toggle').click();
    }
});

$('.wwo-accordion a.toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('collapsed')) {
        $this.next().removeClass('collapsed');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('collapsed');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('collapsed');
        $this.next().slideToggle(350);
        //reset all icons
        $this.parent().parent().find('li.wrapper-dropdown').find('a.toggle i').text('add');
    }

    //toggle current icon
    var $icon = $this.find('i');
    var iconValue = $icon.text();
    $icon.text(iconValue == 'add' ? 'remove' : 'add');

});


$(document).ready(function() {

    // DEEPLINKING + ANCHOR FOR PRODUCT FINDER
    if (location.hash.length) {
        var deeplink = location.hash;
        var foundItem = $("#productFinder").find(deeplink);
        var myDeeplink = deeplink.substring(1);
        var groupFlag = $(foundItem).attr('ref');
        //console.log(myDeeplink);
        var allItems = $('.panes').children('#productList').children('li');

        //var family;
        $(allItems).each(function(index) {

            if ($(this).children('.subContent').attr('ref') == groupFlag) {
                $(this).addClass('bgWhite');
                //family = $(this);
            }
        });

        //$(foundItem).addClass("DEEPLINK");

        //Do work on Parents of Deeplink item to expand down to selected item
        $(foundItem).parents('li').addClass('bgWhite');
        $(foundItem).parents('li').children('.productItem').children('.productImage').children('a').toggleClass("selected");
        $(foundItem).parents('li').children('.productItem').children('.shadow50').removeClass("hide");


        //Do work on Children of Deeplink item
        $(foundItem).children().children().children('.productItem').children('.productImage').children('a').toggleClass("selected");
        $(foundItem).children().children().children('.productItem').children('.shadow50').removeClass("hide");
        $(foundItem).parent().children('.subContent:first').children().children('li:first').css({ borderTop: 'none' });
        $(foundItem).children().children().children('.subContent').children('#productList').children('li:first').css({ borderTop: 'none' });

        //Animate Parents
        $(foundItem).parents('li').children('.subContent').slideToggle('fast', function() {});

        //Animate Children
        $(foundItem).children().children().children('.subContent').slideToggle('fast', function() {
            // SCROLL THE PAGE TO THE SELECTED ID
            $('html,body').animate({ scrollTop: $("#" + myDeeplink).offset().top }, 'slow');
        });

    }




});


// Product finder
$('.productItem a').click(function() {

    $(this).toggleClass("selected");

    if ($(this).parent().parent().parent().hasClass('bgWhite')) {
        $(this).parent().parent().parent().removeClass('bgWhite');
        $(this).parent().parent().children('.shadow50').addClass('hide');
    } else {
        $(this).parent().parent().children('.shadow50').removeClass('hide');
        $(this).parent().parent().parent().addClass('bgWhite');

        //Force removal of barder on first SubItem in active list
        $(this).parent().parent().parent().children('.subContent').children('#productList').children('li:first').css({ borderTop: 'none' });

    }

    $(this).parent().parent().parent().children().next('.subContent').slideToggle('slow', function() { // Animation complete.
    });
});

//Preventing dropdowns on empty sub navigation menus
$(function() {
    $(".mainNav ul li a.navLink").each(function() {
        $ulInList = $(this).next().find('ul').length;
        $dlInList = $(this).next().find('dl').length;
        if ($ulInList === 0 && $dlInList === 0) {
            $(this).addClass('noDrop')
        }
    });
});

//Removing margin-bottom from images parbase
$(function() {
    $('img.remove-margin').each(function() {
        $(this).closest('.image.parbase').css('margin-bottom', 0)
    })
});

$(function() {

    var banner = $("#cookie-banner");
    var closeButton = $("#cookie-banner .close");
    var footerRedesign = $("footer.footer-redesign");

    var COOKIE_BANNER_NAME = "cookie-banner";

    function setCookie(cookieName, cookieValue) {
        localStorage.setItem(cookieName, cookieValue);
    }

    function getCookie(cookieName) {

        return localStorage.getItem(cookieName);

    }

    function removeCookie() {
        localStorage.removeItem(COOKIE_BANNER_NAME);
    }

    function checkCookie() {
        var cookie = getCookie(COOKIE_BANNER_NAME);
        if (cookie) {
            banner.hide();
            footerRedesign.removeClass('cookiesOn');
        } else {
            banner.show();
            footerRedesign.addClass('cookiesOn');
        }
    }

    checkCookie();

    closeButton.click(function() {
        banner.hide();
        footerRedesign.removeClass('cookiesOn');
        setCookie(COOKIE_BANNER_NAME, "true");
    });
});
/*! Avery Dennison FED Javascript
	Primary FED: erik.johnsen@acquitygroup.com
*/

/*Start Modal code*/
var documentHeight;
var windowWidth;
var windowHeight;
var modalAnimation = 250; //.25 seconds in and out
var currentModalID = "";
var auto;

$('#gpa-scale-4').on('click', function() {
    document.getElementById('gpa-score').innerHTML = `<label for="gpa" class="form-label">12. Your GPA: <strong style="color: red;">*</strong></label>
<input type="number" id="gpa" name="gpa" class="form-control" required min="0" max="4">`
})

$('#gpa-scale-10').on('click', function() {
    document.getElementById('gpa-score').innerHTML = `<label for="gpa" class="form-label">12. Your GPA: <strong style="color: red;">*</strong></label>
<input type="number" id="gpa" name="gpa" class="form-control" required min="0" max="10">`
})

//Primary modal display and switching function. Will work modal to modal. example onclick="javascript:showModal('#actualModalID');"
function showModal(id, id2) {
    if ($(id).length) {

        currentModalID = id;
        documentHeight = $(document).height();
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        $(".modalContainer").fadeOut(modalAnimation);
        $('#modalBg').css({ 'width': windowWidth, 'height': documentHeight, 'opacity': 0.7 });
        $(id).css('top', (windowHeight / 2) - ($(id).height() / 2) + $(window).scrollTop());
        $(id).css('left', (windowWidth / 2) - ($(id).width() / 2));
        $(id).stop(true, true).fadeIn(modalAnimation);
        $("#modalBg").fadeIn(modalAnimation);

        if (id.indexOf("modalNewsletter1") != -1) {
            captchaRefresh();

        }
        if (id.indexOf("video") != -1) {
            //toggleVideo(id2);
            var t = setTimeout("jwplayer('" + id2 + "').play();", 500)
        }

    } else {
        hideModal(); //if input id is non-existant, hide any open modals
    }
}

// This function is triggered from /libs/collab/commons/components/comments/clientlibs.js and passed the unique ID of this particular reply form
function getFormID(theID) {
    //console.log("CQ JS SENT:"+theID);
    var tempID = "#" + theID;

    // Create a starting point for this particular form and work with it's children
    var formID = tempID.substr(0, tempID.length - 5)

    var replyName = formID + '-userIdentifier';
    var replyEmail = formID + '-email';
    var replyComment = formID + '-text';
    var submitID = formID + '-submit';

    // Adding in the container for the required asterisk
    //$(replyName).parent().children('.labelWrap').children('label:first').after('<div class="form_leftcolmark"> *</div>');
    //$(replyEmail).parent().children('.labelWrap').children('label:first').after('<div class="form_leftcolmark"> *</div>');
    //$(replyComment).parent().children('.labelWrap').children('label:first').after('<div class="form_leftcolmark"> *</div>');

    // Default the error messages to not show when CQ outputs this form
    $(replyName).parent().children('span:first').addClass('hide');
    $(replyEmail).parent().children('span:first').addClass('hide');
    $(replyComment).parent().children('div:first').addClass('hide');

    // Valiudation
    $(submitID).click(function(e) {
        //console.log("SUBMIT BUTTON ID:"+$(this).attr('id'));
        //console.log("REPLY FORM CLICK");

        // Default the error messages to not show when CQ outputs this form
        $(replyName).parent().children('span:first').addClass('hide');
        $(replyEmail).parent().children('span:first').addClass('hide');
        $(replyComment).parent().children('div:first').addClass('hide');

        // Check for Name value
        if ($(replyName).val().length <= 0) {
            $(replyName).parent().children('span:first').removeClass('hide');
            e.preventDefault();
        }
        // Check for Email value
        else if ($(replyEmail).val().length <= 0) {
            $(replyEmail).parent().children('span:first').removeClass('hide');
            e.preventDefault();
        }
        // Check for Comment value
        else if ($(replyComment).val().length <= 0) {
            $(replyComment).parent().children('div:first').removeClass('hide');
            e.preventDefault();
        } else {
            //console.log("NO ERRORS :)  Allowing submit to fire....");

            // REMOVE THIS WHEN DOING A REAL SUBMIT
            //e.preventDefault();
        }

        //$(this).parents('form').submit();
    });
}

// Force delay of communicating with video player until modal has opened
function timedMsg(theVideo) {

    if (jwplayer(theVideo).getState() == "PLAYING") {
        var t = setTimeout("jwplayer('" + theVideo + "').pause();", 0)
    } else if (jwplayer(theVideo).getState() == "PAUSED") {
        var t = setTimeout("jwplayer('" + theVideo + "').play();", 1000)
    } else if (jwplayer(theVideo).getState() == "IDLE") {
        //alert("Idle");
        var t = setTimeout("jwplayer('" + theVideo + "').play();", 500)
    }

}

function toggleVideo(video) {
    timedMsg(video);
}

function pauseVideo(videoToPause) {

    //if(jwplayer(videoToPause).getState()=="PLAYING"){

    var t = setTimeout("jwplayer('" + videoToPause + "').pause('true');", 0)
        //}
}
//Universal hide all modals. example onclick="javascript:hideModal();"
function hideModal() {
    $('#modalBg').fadeOut();
    $('.modalContainer').fadeOut();
    $('#modalBg').off('click', function(e) { hideModal(); });

    $(".modalContent.newsLetter").show();
    $(".modalContent.newsLetter.thankyou").hide();
}

function submitSearch(formID) {
    $(formID).submit();
}

function submitCQform(theForm, theURL) {

    /*
    $.ajax({
           type: "POST",
           url: theURL,
           data: $(theForm).serialize(), // serializes the form's elements.
           success: function(data)
           {
			   $('html').html(data);
           }
         });
		return false;
		*/
}

function handleDeeplink() {

    // DEEPLINKING + ANCHOR FOR PRODUCT FINDER
    if (location.hash.length) {
        var deeplink = location.hash;
        var foundItem = $("#productFinder").find(deeplink);
        var myDeeplink = deeplink.substring(1);
        var groupFlag = $(foundItem).attr('ref');
        //console.log(myDeeplink);
        var allItems = $('.panes').children('#productList').children('li');

        //var family;
        $(allItems).each(function(index) {

            if ($(this).children('.subContent').attr('ref') == groupFlag) {
                $(this).addClass('bgWhite');
                //family = $(this);
            }
        });

        //$(foundItem).addClass("DEEPLINK");

        //Do work on Parents of Deeplink item to expand down to selected item
        $(foundItem).parents('li').addClass('bgWhite');
        $(foundItem).parents('li').children('.productItem').children('.productImage').children('a').toggleClass("selected");
        $(foundItem).parents('li').children('.productItem').children('.shadow50').removeClass("hide");


        //Do work on Children of Deeplink item
        $(foundItem).children().children().children('.productItem').children('.productImage').children('a').toggleClass("selected");
        $(foundItem).children().children().children('.productItem').children('.shadow50').removeClass("hide");
        $(foundItem).parent().children('.subContent:first').children().children('li:first').css({ borderTop: 'none' });
        $(foundItem).children().children().children('.subContent').children('#productList').children('li:first').css({ borderTop: 'none' });

        //Animate Parents
        $(foundItem).parents('li').children('.subContent').slideToggle('fast', function() {});

        //Animate Children
        $(foundItem).children().children().children('.subContent').slideToggle('fast', function() {
            // SCROLL THE PAGE TO THE SELECTED ID
            $('html,body').animate({ scrollTop: $("#" + myDeeplink).offset().top }, 'slow');
        });

    }

} // END DEEPLINK AND ANCHOR

function checkOfficesDropdown() {
    var outboundString;
    var regionString = $('#region').attr('value');
    var countryString = $('#country').attr('value');
    var buString = $('#bu').attr('value');
    var stateString = $('#state').attr('value');

    //if state is all, submit request with country and BU
    if (buString !== "false" && stateString !== "false") {
        buString = buString + '.';
    } else if (buString !== "false" && stateString === "false") {
        buString = buString;
    } else {
        buString = '';
    }
    if (stateString === 'false' || stateString === 'all') {
        stateString = '';
    } else {
        stateString = stateString;
    }

    if (regionString !== "false" && regionString !== "") {
        if (countryString !== "false" && countryString !== "") {
            countryString = regionString + '.' + countryString + '.';
            outboundString = countryString.concat(buString, stateString);
            getDropdownContent(outboundString);
        }
    }
}

function getDropdownContent(selectedValue) {

    var pagePrefix = $('#pagePrefix').attr('value');
    var jsonPrefix = $('#jsonPrefix').attr('value');
    var pageSuffix = $('#pageSuffix').attr('value');
    var jsonSuffix = $('#jsonSuffix').attr('value');

    var dropDownStorage = selectedValue;
    var itemsArray = [];

    // Remove all the items in the dropdowns before repopulating
    $('#state_list').children('option').each(function(index) {
        $(this).remove();
    });
    $('#bu_list').children('option').each(function(index) {
        $(this).remove();
    });

    var serviceUrl = jsonPrefix + dropDownStorage + jsonSuffix;
    $.get(serviceUrl, function(data, textStatus) {

        var items = JSON.parse(data);

        for (var p = 0; p < items.dropdownmenu.length; p++) {
            itemsArray.push(items.dropdownmenu[p]);
        }

        // iterate over json and assign to vars for BUs
        if (itemsArray[0].bu.length >= 1) {
            $('.subItem').addClass('show');

            for (var x = 0; x < itemsArray[0].bu.length; x++) {
                var buLabel = itemsArray[0].bu[x].label;
                var buValue = itemsArray[0].bu[x].value;

                // Write out new divs under each dropdown
                if (itemsArray[0].bu[x].selected === 'true') {
                    if (x === 0) {
                        var bu = '<option class="false" value="' + buValue + '" selected="selected">' + buLabel + '</option>';
                    } else {
                        var bu = '<option value="' + buValue + '" selected="selected">' + buLabel + '</option>';
                    }
                    $('#bu_list').append(bu);
                } else {
                    var bu = '<option value="' + buValue + '">' + buLabel + '</option>';
                    $('#bu_list').append(bu);
                }
            }

            if ($('#bu_list').children("option:first-child").hasClass('false')) {
                $('.subSearch').removeClass('show');
            } else {
                $('.subSearch').addClass('show');
            }
        }

        if (itemsArray[1].state.length >= 1) {

            $('.subOr').addClass('show');
            $('.subState').addClass('show');
            $('.subSearch').addClass('show');

            // iterate over json and assign to vars for States
            for (var t = 0; t < itemsArray[1].state.length; t++) {
                var buLabel = itemsArray[1].state[t].label;
                var buValue = itemsArray[1].state[t].value;

                var stateLabel = itemsArray[1].state[t].label;
                var stateValue = itemsArray[1].state[t].value;

                // Write out new divs under each dropdown
                if (itemsArray[1].state[t].selected === 'true') {
                    var state = '<option value="' + stateValue + '" selected="selected">' + stateLabel + '</option>';
                    $('#state_list').append(state);
                } else {
                    var state = '<option value="' + stateValue + '">' + stateLabel + '</option>';
                    $('#state_list').append(state);
                }
            }
        } else {
            //$('#state_list').parent().removeClass('show');
            $('.subState').removeClass('show');
            $('.subOr').removeClass('show');
            //$('.subSearch').removeClass('show');
        }

        //populate the value of the search button
        var target = pagePrefix + dropDownStorage + pageSuffix;
        var regionString = $('#region').attr('value');
        var buString = $('#bu').attr('value');

        var searchButton = $('#searchBUS');
        //$('#searchBUS').attr("href", pagePrefix+dropDownStorage+pageSuffix);
        //$('#searchBUS').attr("onClick","javascript:ga('send', 'event','BU Finder','search','" + pagePrefix+dropDownStorage+pageSuffix + " ']);")
        searchButton.attr("href", target);
        searchButton.attr("onClick", "javascript:ga('send', 'event','Office Finder','search','" + buString + " ');");

    }, 'text');
} // END dropdown content


//Extra Modal code, reposition on window resize, etc
$(document).ready(function() {

    /*
    window.fbAsyncInit = function() {

    	FB.Event.subscribe('edge.create', function(response) {
    		alert('You liked the URL: ' + response);
    	});
    };
    */

    //reposition on window resize
    $(window).resize(function() {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        $(currentModalID).css('top', (windowHeight / 2) - ($(currentModalID).height() / 2) + $(window).scrollTop());
        $(currentModalID).css('left', (windowWidth / 2) - ($(currentModalID).width() / 2));
        $('#modalBg').css({ 'width': windowWidth });
    });
    //When an A tag with rel=modal is clicked, make the background on click close window
    $('a[rel=modal]').on('click', function(e) {
        e.preventDefault();
        //$('#modalBg').on('click',function(e){hideModal();}); Removed to force the user to use the close button and not the background of the modal
    });
    //when an element with .close class inside of modal content or a class with .hideModal is clicked close all modals

    $('.modalContent .close, .hideModal').on('click', function(e) {
        e.preventDefault();
        hideModal();

    });
    //Move all modalBgs (should only be one) and prepend IE7 modal fix to top of document, for better cross browser results
    if ($("#modalBg").length) {
        $("#modalBg").each(function() {
            $('html > body:first').prepend('<div id="modalIE7Fix">&nbsp;</div>');
            $('html > body:first').prepend(this);
        });
    }
    //Move all modal content to top for better cross browser results
    if ($("body .modalContainer").length) {
        $("body .modalContainer").each(function() {
            $('html > body:first').prepend(this);
            //$('html > body:first').prepend("<a class='close'>Close</a>");
            //$('.close').fadeOut();
        });

        /*
        top: 250px;
        right: 182px;
        */
    }
    /*END onReady Modal*/

    /* Check for WW office dropdown default show and population*/
    if ($(".selectCountry ").length) {
        //alert("Dropdowns found");
        checkOfficesDropdown();
    } else {
        //alert("No Dropdowns");
    }
});

/*Start General On Ready*/
$(document).ready(function() {

    /*preloader*/
    function preload(arrayOfImages) {
        $(arrayOfImages).each(function() {
            (new Image()).src = this;
        });
    }
    //alert(location.hash);
    //Paths may need to be updated on going live
    preload([
        '/includes/img/ui/bg/mainDropBg.png' //cq
        /*'includes/img/ui/bg/mainDropBg.png'*/ // Rockflicker


        /*'img/ui/nav/dropNav/megaBottom.png'*/
    ]);


    /*
    START SEARCH EXPANDER
    */
    //hack for overflowed main nav over search area, may be removed in future with design change

    if (parseInt($(".topNav .mainNav ul.navLinks").css("width")) > 720) {
        $(".topNav .collapsedSearch").animate({ top: 10 }, 500);
    }

    var expandRegion;
    var searchWidth;
    $('.topNav .expandSearch').hover(function() {
        expandRegion = $(this).parent().children('.expandThis');
        searchWidth = parseInt(expandRegion.css('width'));
        if (searchWidth < 26) { //would ideally be "<=183",hacked for IE7
            expandRegion.animate({ width: 183 }, 250).focus();
        }
    });
    /*
    END SEARCH EXPANDER
    */
    $('body').attr("class", "js");

    handleDeeplink();
    /*
    START NAV
    */
    if ($(".mainNav").length) {
        var divToDrop;
        var divLinkActive;
        var objectOffset;
        var timeoutDuration = 200;
        var slideDownDuration = 200;
        var fadeOutDuration = 198; // must be less than timeoutDuration
        function putDropOnStartTimer(startLink, state) {
            if (($(startLink).hasClass("noDrop"))) {
                return true;
            }
            divToDrop = startLink.next('.mainNavDropContainer');
            var timeout = $(this).data("timeout");
            if (timeout) clearTimeout(timeout);
            if (state == "start") {
                $(this).data("timeout", setTimeout($.proxy(function() {
                    startDropDown(startLink, divToDrop);
                }, this), timeoutDuration));
            } else {
                clearTimeout(timeout);
            }
        }

        function startDropDown(startLink, divToDrop) {
            $(".mainNavDropContainer").fadeOut(fadeOutDuration);
            $(".mainNav ul li a.navLink").off('mouseenter mouseleave');
            objectOffset = $(startLink).parent().closest("li").position();

            $(divToDrop).css('left', -objectOffset.left).slideDown(slideDownDuration);
            if (!($(startLink).hasClass("noDrop"))) {
                $(startLink).addClass("active");
            }

            setTimeout(function() {
                $(startLink).parent().hover(
                    function() {},
                    function() {
                        $(divToDrop).fadeOut(fadeOutDuration);
                        setTimeout(function() { $(".mainNav ul li a").removeClass("active"); }, fadeOutDuration - 75);
                        bindUm();
                    });
            }, slideDownDuration);

            //alert(objectOffset.left);
        }


        //Setup Nav triggers and placement
        function bindUm() {
            $(".mainNav ul li a.navLink").each(function() {
                $(this).hover(function() { putDropOnStartTimer($(this), "start") }, function() { putDropOnStartTimer($(this), "stop") });
            });
        }

        bindUm();

        // END NAV



        /*
        START HOMEPAGE FEATURE
        */
        /* Original Avery Colors*/
        bgcRedBright = { dark: "#CC0000", light: "#FF0014" };
        bgcYellowOrange = { dark: "#FF9900", light: "#FAB023" };
        bgcOrange = { dark: "#FF3300", light: "#FF6600" };
        bgcToupe = { dark: "#a99d81", light: "#c4b796" };
        bgcPurpleDark = { dark: "#330066", light: "#580e9b" };
        bgcPurpleLight = { dark: "#993399", light: "#9f60b5" };
        bgcGreenLime = { dark: "#009900", light: "#33CC00" };
        bgcGreenMedium = { dark: "#004300", light: "#006600" };
        bgcBlueMuted = { dark: "#2b4872", light: "#3c639c" };
        bgcAqua = { dark: "#3399FF", light: "#00CCFF" };

        // Shared colors
        bgcGreyDark = { dark: "#333333", light: "#4d4f53" };
        bgcGreyLight = { dark: "#666666", light: "#999999" };



        // MEDICAL COLORS
        bgcOrangeDark = { dark: "#Cf673B", light: "#FF6633" };
        bgcGreenDark = { dark: "#6D9830", light: "#8DC63F" };
        bgcBlueDark = { dark: "#007BAE", light: "#0096D6" };
        bgcBlueLightDark = { dark: "#4A9BAB", light: "#60C9DD" };
        bgcOrangeLightDark = { dark: "#D9982D", light: "#FBB034" };
        bgcYellowDark = { dark: "#B3B446", light: "#E3E65B" };
        bgcFusiaDark = { dark: "#7B1264", light: "#A21984" };
        bgcPurpleDarkMedical = { dark: "#9C6A97", light: "#BF83B9" };

        // JAC COLORS
        bgcJacPantone326 = { dark: "#00A295", light: "#00A295" };
        bgcJac50Pantone326 = { dark: "#97D1CB", light: "#97D1CB" };
        bgcJac30Pantone326 = { dark: "#C6E4E0", light: "#C6E4E0" };


        // LANDING FEATURE
        if ($(".landingFeatureA").length) {

            var featureColor;
            //= hpfColor;
            $(".landingFeatureA").each(function() {

                // Get the current color of something
                if ($(this).children(".featureColor").val()) {
                    featureColor = $(this).children(".featureColor").val();
                    featureColor = "bgc" + featureColor;
                    // Target the background
                    $(this).css("background-color", window[featureColor].light);
                    // Target the square Icon
                    $(this).children(".featureLeft").find(".actionArrow").css("background-color", window[featureColor].dark);
                }
            });
        }

        if ($(".landingFeatureB").length) {

            var featureColor;
            //= hpfColor;
            $(".landingFeatureB").each(function() {

                // Get the current color of something
                if ($(this).children(".featureColor").val()) {
                    featureColor = $(this).children(".featureColor").val();
                    featureColor = "bgc" + featureColor;
                    // Target the background
                    $(this).css("background-color", window[featureColor].light);
                    // Target the square Icon
                    $(this).children(".featureLeft").find(".actionArrow").css("background-color", window[featureColor].dark);
                }
            });
        }

        if ($(".searchPromoContainer").length) {

            var promoColor;
            //= hpfColor;
            $(".searchPromoContainer").each(function() {

                // Get the current color of something
                if ($(this).children(".promoColor").val()) {
                    promoColor = $(this).children(".promoColor").val();
                    promoColor = "bgc" + promoColor;
                    // Target the background
                    $(this).css("background-color", window[promoColor].light);
                }
            });
        }




        if ($("#worldwideSites_mainContainer").length) {

            var zIndexNumber = 1000;
            $('#worldwideSites_sectionLinks li').each(function() {
                $(this).css('zIndex', zIndexNumber);
                zIndexNumber -= 10;
            });

        }

        /*END GALLERIES*/




        /*Start Left Nav*/
        var leftNavAnimation = 500;
        if ($(".leftNavContainer").length) {

            $(".controls a").on("click", function(ep) {

                if ($(this).hasClass("showOn")) {
                    $(this).removeClass("showOn").addClass("hideOn");
                    $(this).parent().next("dl.leftNav").children("dd").stop(true, true).slideDown(leftNavAnimation);
                } else if ($(this).hasClass("hideOn")) {
                    $(this).removeClass("hideOn").addClass("showOn");
                    $(this).parent().next("dl.leftNav").children("dd").stop(true, true).slideUp(leftNavAnimation);
                }

                if ($(this).hasClass("actionAll")) {

                    if ($(this).children("span:first-child").hasClass("show")) {
                        $(this).children("span:first-child").removeClass("show").addClass("hide");
                        $(this).children("span:last-child").removeClass("hide").addClass("show");

                        $(this).parent().next("dl.leftNav").children("dt").stop(true, true).slideDown(leftNavAnimation);
                    } else {
                        $(this).children("span:first-child").removeClass("hide").addClass("show");
                        $(this).children("span:last-child").removeClass("show").addClass("hide");

                        $(this).parent().next("dl.leftNav").children("dt.closed").stop(true, true).slideUp(leftNavAnimation);
                    }

                    return false;
                } else {
                    return true;
                }


            });

        }

        // Check for CQ comments component.  Add marlup for submit styling
        if ($(".commentForm").length) {
            //$(".submit-block").append('<span class="cap"></span>');

            console.log("TOP FORM IN PLAY");

            // OUTPUT ID OF FORM SUBMIT BUTTON FOUND ON PAGE
            //console.log($('.commentForm').children().children('form').find('input:submit').attr('id'));

            var formID = "#" + $('.commentForm').children().children('form').find('input:submit').attr('id');
            var formAnchor = "#" + $('.commentForm').children('div:first').attr('id');

            //User Inputs
            var uName = formAnchor + '-userIdentifier';
            var uEmail = formAnchor + '-email';
            var uComment = formAnchor + '-text';

            // Error display containers.  Hide them on load

            $(uName).parent().children('span:first').addClass('hide');
            $(uEmail).parent().children('span:first').addClass('hide');
            $(uComment).parent().children('div:first').addClass('hide');

            // TEMP INJECTION OF NEW DIV
            //$(uName).parent().children('label:first').before('<div class="form_leftcollabel">');
            //$(uName).parent().children('.form_leftcolmark').before('</div>');

            //Add the Asterisk to required fields
            //$(uName).parent().children('.labelWrap').children('label:first').after('<div class="form_leftcolmark"> *</div>');
            //$(uEmail).parent().children('.labelWrap').children('label:first').after('<div class="form_leftcolmark"> *</div>');
            //$(uComment).parent().children('.labelWrap').children('label:first').after('<div class="form_leftcolmark"> *</div>');

            //Add event handler for this particular comment form's submit
            $(formID).click(function(e) {

                //console.log("SUBMIT BUTTON ID:"+$(this).attr('id'));

                $(uName).parent().children('span:first').addClass('hide');
                $(uEmail).parent().children('span:first').addClass('hide');
                $(uComment).parent().children('span:first').addClass('hide');

                // Check for Name value
                if ($(uName).val().length <= 0) {
                    $(uName).parent().children('span:first').removeClass('hide');
                    e.preventDefault();
                }
                // Check for Email value
                else if ($(uEmail).val().length <= 0) {
                    $(uEmail).parent().children('span:first').removeClass('hide');
                    e.preventDefault();
                }
                //Check Email for @ and .
                else if ($(uEmail).val().indexOf('@') == -1 || $(uEmail).val().indexOf('.') == -1) {
                    $(uEmail).parent().children('span:first').removeClass('hide');
                    e.preventDefault();
                }
                // Check for Comment value
                else if ($(uComment).val().length <= 0) {
                    $(uComment).parent().children('span:first').removeClass('hide');
                    e.preventDefault();
                } else {
                    //console.log("NO ERRORS :)  Allowing submit to fire....");

                    // REMOVE THIS WHEN DOING A REAL SUBMIT
                    //e.preventDefault();
                }

                //$(this).parents('form').submit();
            });

        }
        // End Comments component

    }

    /* Comments submit*/




    /*End Left Nav*/

    /*Start Input highlights*/
    $(".form table input").focus(function() {
        $(this).parent().children("label").css("color", "#000");
        $(this).css("border-color", "#000");
    });
    $(".form table input").blur(function() {
        $(this).parent().children("label").css("color", "");
        $(this).css("border-color", "");
    });


    // setup ul.tabs to work as tabs for each div directly under div.panes


    /* CheckBoxes and Radios */
    /*
      When the toggle switch is clicked, check off / de-select the associated checkbox
     */
    $('.toggle').click(function(e) {
        var checkboxID = $(this).attr("ref");
        var checkbox = $('#' + checkboxID);

        if (checkbox.is(":checked")) {
            checkbox.removeAttr("checked");

        } else {
            checkbox.attr("checked", "true");
        }
        $(this).toggleClass("checked");

        e.preventDefault();

    });

    // radio
    $('.section.radio .radio').click(function(e) {

        var radioID = $(this).attr("ref");
        var radio = $('#' + radioID);
        var radioName = radio.attr('name');

        // OnClick, uncheck all in this radio group
        $('input:radio[name=' + radioName + ']').attr('checked', false);

        // OnClick, uncheck all the <a> tags in this radio group
        $('input:radio[name=' + radioName + ']').next('a').removeClass('checked');

        // Toggle the this particular <a> tag as checked or not
        $(this).toggleClass("checked");

        //Check this input only
        $(radio).attr("checked", "true");

        e.preventDefault();

    });

    if ($(".filterContainer").length) {

        $('.filterHide').addClass('hide');

        $('.filterDisplay').click(function(e) {

            //Scope for this particular group
            var startList = $(this).parent().parent();

            if ($(startList).children().children('.filterDisplay').children('.filterShow').hasClass('hide')) {

                // Hide only those that do not have 'default' on them.
                $(startList).children().children('.filterItem').each(function(index) {
                    if (!$(this).hasClass('default')) {
                        $(this).addClass('hide');
                    }
                });
            } else {
                // Show all in this set
                $(startList).children().children('.filterItem').each(function(index) {
                    $(this).removeClass('hide');
                });
            }
            $(startList).children().children('.filterDisplay').children('.filterShow').toggleClass('hide');
            $(startList).children().children('.filterDisplay').children('.filterHide').toggleClass('hide');

            e.preventDefault();

        });
    }
    /*
	$('.filterCheckBox .navToggleRadio').click(function(e) {
       var radioID = $(this).attr("ref");
       var radio = $('#'+radioID);

       if (radio.is(":checked")) {
		   alert("checked");
         radio.removeAttr("checked");

       }else{
		    alert("NOT checked");
         radio.attr("checked","true");
       }
      $(this).toggleClass("checked");

       e.preventDefault();

    });
	*/
    /* End Check boxes and radios */


    $('#searchPromoDropdown').change(function(e) {

        var dropDownValue = $(this).val();
        $(this).parent().parent().find('#buSearch').attr("href", dropDownValue);

        e.preventDefault();
    });


    /*
	$('.lockTwitter').click(function() {

       $(this).addClass("HI");
		console.log("HIT");
		//alert("HIT");
       e.preventDefault();

    });
	*/

    /*$('span.languages a').click(function(){
        var spans = $(this).closest('.sectionLanguage').parent().find('span');
        if (spans){
            $.cookie($(spans[0]).html(), $(this).html(), { expires: 1, path: '/', domain: '.averydennison.com'});
        }
    });*/

    // Set current Language
    var currentLanguage = $('#currentLanguage').val();
    var currentSite = $('#currentSite').val();
    //var selectedLanguage = $.cookie(currentSite.replace('&','&amp;'));

    if (currentLanguage) {
        $('#toggleMenu2').hide();
        $('.languageSelected').show();
        $('#toggleMenu').show();
        $('#toggleMenu').next().addClass('leftBorder');
    } else {
        $('#toggleMenu').hide();
        $('#toggleMenu2').show();
        $('.languageSelected').hide();
        $('#toggleMenu').next().removeClass('leftBorder');
    }

});