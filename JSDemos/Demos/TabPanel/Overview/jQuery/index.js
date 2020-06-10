$(function(){
    DevExpress.setTemplateEngine("underscore");
    
    var tabPanel = $("#tabpanel-container").dxTabPanel({
        height: 260,
        dataSource: tabPanelItems,
        selectedIndex: 0,
        loop: false,
        animationEnabled: true,
        swipeEnabled: true,
        itemTitleTemplate: $("#title"),
        itemTemplate: $("#customer"),
        onSelectionChanged: function(e) {
            $(".selected-index")
                .text(e.component.option("selectedIndex") + 1);
        }
    }).dxTabPanel("instance");
    
    
    $("#loop-enabled").dxCheckBox({
        value: false, 
        text: "Loop enabled",
        onValueChanged: function(e) {
            tabPanel.option("loop", e.value);
        }
    });
    
    $("#animation-enabled").dxCheckBox({
        value: true, 
        text: "Animation enabled",
        onValueChanged: function(e) {
            tabPanel.option("animationEnabled", e.value);
        }
    });
    
    $("#swipe-enabled").dxCheckBox({
        value: true, 
        text: "Swipe enabled",
        onValueChanged: function(e) {
            tabPanel.option("swipeEnabled", e.value);
        }
    });
    
    $(".item-count").text(tabPanelItems.length);
    
});