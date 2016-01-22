angular.module('SampleAPP')
    .service('NavService', [ NavService]);

function NavService() {
    var oNavList = [
        {
            "title": "Home",
            "icon": "home",
            "show": true,
            "subMenu": [
                {
                    "title": "H Nav1",
                    "show" : false,
                    "subNav":[
                        {"title": "Sub Nav 1"},
                        {"title": "Sub Nav 2"}
                    ]
                },
                {
                    "title": "H Nav2",
                    "show" : false,
                    "subNav":[
                        {"title": "Sub Nav 1"},
                        {"title": "Sub Nav 2"}
                    ]
                },
            ]
        },
        {
            "title": "Dashboard",
            "icon": "dashboard",
            "show": false,
            "subMenu": []
        },
        {
            "title": "Settings",
            "icon": "settings",
            "show": false,
            "subMenu": []
        },
        {
            "title": "Report",
            "icon": "report",
            "show": false,
            "subMenu": []
        },
        {
            "title": "Calendar",
            "icon": "calendar",
            "show": false,
            "subMenu": []
        },
        {
            "title": "Email",
            "icon": "email",
            "show": false,
            "subMenu": []
        },
        {
            "title": "File Manage",
            "icon": "file",
            "show": false,
            "subMenu": []
        }

    ];
    /**
     * Gets the nav list for the UI 
     * @returns {Array} array list for the nav bar list
     */
    var getNavList = function () {
        return oNavList;
    };

    return {       
        getNavList: getNavList
    };
}