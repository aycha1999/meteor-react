FlowRouter.route("/",{
    name:"Home",
    action(params){
   renderView(<Home />);
    }
});

function renderView(component){
    ReactLayout.render(MainLayout, {
        header: <Header />,
        content: component,
        footer: <footer />,
        logThis: "this is z proprety"

    })
}