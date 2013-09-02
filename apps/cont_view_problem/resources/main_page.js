// ==========================================================================
// Project:   ContViewProblem - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================


ContViewProblem.ViewMe1 = SC.LabelView.extend({
  layout: { left: 5, top: 0, width: 300, height: 24 },
  value: "View #1"
});

ContViewProblem.ViewMe2 = SC.LabelView.extend({
  layout: { left: 5, top: 30, width: 300, height: 24 },
  value: "View #2"
});

// This page describes the main user interface for your application.
ContViewProblem.mainPage = SC.Page.design({
  mainPane: SC.MainPane.design({
    childViews: ['contView', 'butView'],
    
    contView: SC.ContainerView.design({
      layout: { left: 0, top: 50, right: 0, bottom: 0 },
      nowShowing: null,
      contentView: ContViewProblem.ViewMe1.design()
    }),
    
    butView: SC.ButtonView.design({
      layout: { top: 0, left:0, width: 100, height: 30 },
      title: "Change View",
      
      mouseUp: function(evt)
      {
        var contView = ContViewProblem.getPath('mainPage.mainPane.contView');
        
        if (contView)
          contView.set('nowShowing', 'ContViewProblem.ViewMe2');
        else
          console.log("contView is null.");
      }
    })
  })
});
