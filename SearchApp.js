sap.ui.define([
  "sap/m/App",
  "sap/m/Page",
  "sap/m/VBox",
  "sap/m/HBox",
  "sap/m/Input",
  "sap/m/Button",
  "sap/m/Text",
  "sap/m/Title",
  "sap/m/Link",
  "sap/m/MessageStrip"
], function(App, Page, VBox, HBox, Input, Button, Text, Title, Link, MessageStrip) {
  "use strict";

  function goToCatalog(input) {
    var query = input && input.getValue ? input.getValue() : "";
    var target = "ariba-sonic-radar.html";
    if (query && query.trim()) {
      target += "?q=" + encodeURIComponent(query.trim());
    }
    window.location.href = target;
  }

var searchInput = new Input("searchField", {
  width: "100%",
  placeholder: "Search products, suppliers, categories, or catalog items",
  value: "I want to purchase a sonic radar product on Ariba",
  submit: function() { goToCatalog(searchInput); }
  }).addStyleClass("largeSearchInput");

  var searchButton = new Button("searchButton", {
    text: "Search Catalog",
    type: "Emphasized",
    press: function() { goToCatalog(searchInput); }
  });

  var app = new App({
    pages: [
      new Page({
        title: "ProcureSearch Demo",
        content: [
          new VBox({
            alignItems: "Center",
            justifyContent: "Center",
            width: "100%",
            height: "100%",
            items: [
              new VBox({
                width: "60%",
                alignItems: "Center",
                items: [
                  new Text({ text: "MOCK ARIBA-STYLE PROCUREMENT SEARCH" }).addStyleClass("eyebrow"),
                  new Title({ text: "ProcureSearch Demo", level: "H1" }).addStyleClass("heroTitle"),
                  new Text({ text: "A public mock procurement search page for AI agent retrieval and GEO testing." }).addStyleClass("heroSubtitle"),
                  new HBox({
                    width: "100%",
                    alignItems: "Center",
                    items: [searchInput, searchButton]
                  }).addStyleClass("searchBox"),
                  new Text({ text: "Any search query redirects to the same fictional sonic radar procurement catalog." }).addStyleClass("hintText"),
                  new Link({
                    text: "Open the Sonic Radar Catalog page directly",
                    href: "ariba-sonic-radar.html"
                  }).addStyleClass("directLink"),
                  new MessageStrip({
                    text: "Disclosure: This demo is not an official SAP Ariba website. All product, supplier, pricing, and catalog data are fictional.",
                    type: "Information",
                    showIcon: true
                  }).addStyleClass("disclosureStrip")
                ]
              })
            ]
          }).addStyleClass("homeShell")
        ]
      })
    ]
  });

  app.placeAt("content");
});
