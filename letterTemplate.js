(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['letters'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n\r\n<div class=\"post\" data-month=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"month") || (depth0 != null ? lookupProperty(depth0,"month") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data,"loc":{"start":{"line":3,"column":30},"end":{"line":3,"column":39}}}) : helper)))
    + "\" data-date=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":3,"column":52},"end":{"line":3,"column":60}}}) : helper)))
    + "\" data-tag=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tag") || (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data,"loc":{"start":{"line":3,"column":72},"end":{"line":3,"column":79}}}) : helper)))
    + "\">\r\n    <div class=\"post-contents\">\r\n        <div class=\"post-info-container\">\r\n            <button type=\"button\" class=\"post-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":53},"end":{"line":6,"column":62}}}) : helper)))
    + "</button> <span class=\"post-month\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"month") || (depth0 != null ? lookupProperty(depth0,"month") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data,"loc":{"start":{"line":6,"column":97},"end":{"line":6,"column":106}}}) : helper)))
    + "</span> <span class=\"post-date\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":6,"column":138},"end":{"line":6,"column":146}}}) : helper)))
    + "</span> <span class=\"post-tag\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tag") || (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data,"loc":{"start":{"line":6,"column":177},"end":{"line":6,"column":184}}}) : helper)))
    + "</span>\r\n            <div id=\"modal-backdrop\" class=\"hidden\"></div>\r\n            <div id=\"opened-post-modal\" class=\"hidden\">\r\n                <div class=\"modal-page\">\r\n                    <div class=\"opened-post-modal-page\">\r\n                        <span class=\"post-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":11,"column":49},"end":{"line":11,"column":58}}}) : helper)))
    + "</span>\r\n                        <span class=\"post-month\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"month") || (depth0 != null ? lookupProperty(depth0,"month") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data,"loc":{"start":{"line":12,"column":49},"end":{"line":12,"column":58}}}) : helper)))
    + "</span> <span class=\"post-date\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":12,"column":90},"end":{"line":12,"column":98}}}) : helper)))
    + "</span> <span class=\"post-tag\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tag") || (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data,"loc":{"start":{"line":12,"column":129},"end":{"line":12,"column":136}}}) : helper)))
    + "</span>\r\n                        <span class=\"post-letter\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":13,"column":50},"end":{"line":13,"column":65}}}) : helper)))
    + "</span>\r\n                    </div>\r\n                    <div class=\"opened-post-modal-footer\">\r\n                        <button type=\"button\" id=\"modal-close\" class=\"modal-hide-button action-button\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();