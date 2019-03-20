Parse.Cloud.define("savedevicetoken", function(request, response) {
    var insId = request.params.insId;
    var devToken = request.params.devToken;

    var query = new Parse.Query(Parse.Installation);
    query.get(insId, {useMasterKey: true}).then(function(installation) {
        console.log(installation);
        installation.set("deviceToken", devToken);
        installation.save(null, {useMasterKey: true}).then(function() {
            response.success("true");
        }, function(error) {
            response.error(error);
        })
    }, function (error) {
        console.log(error);
    })
});