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

ContViewProblem.ViewMe3 = SC.LabelView.extend({
  layout: { left: 5, top: 60, width: 300, height: 24 },
  value: "View #3"
});

// This page describes the main user interface for your application.
ContViewProblem.mainPage = SC.Page.design({
  mainPane: SC.MainPane.design({
    childViews: ['contView', 'butView2', 'butView3'],
    
    contView: SC.ContainerView.design({
      backgroundColor: 'yellow',
      layout: { left: 0, top: 50, right: 0, bottom: 0 },
      nowShowing: null,
      contentView: ContViewProblem.ViewMe1.design()
    }),
    
    butView2: SC.ButtonView.design({
      layout: { top: 0, left:0, width: 100, height: 30 },
      title: "Get View #2",
      
      mouseUp: function(evt)
      {
        var contView = ContViewProblem.getPath('mainPage.mainPane.contView');
        
        if (contView)
          contView.set('nowShowing', 'ContViewProblem.ViewMe2');
        else
          console.log("contView is null.");
      }
    }),
    
    butView3: SC.ButtonView.design({
      layout: { top: 0, left:110, width: 100, height: 30 },
      title: "Get View #3",
      
      mouseUp: function(evt)
      {
        var contView = ContViewProblem.getPath('mainPage.mainPane.contView');
        
        if (contView)
          contView.set('nowShowing', 'ContViewProblem.ViewMe3');
        else
          console.log("contView is null.");
      }
    })
  })
});
