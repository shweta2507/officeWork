var axleApp = angular.module('axleApp', []);


axleApp.directive('hcChart', function () {
    return {
        restrict: 'E',
        template: '<div class="chart-container" ></div>',
        scope: {
            options: '='
        },
        link: function (scope, element) {
            Highcharts.chart(element[0], scope.options);
        }
    };
})

axleApp.controller('userController', function ($scope) {

    $scope.practiceFilters = []
    $scope.regionFilters = []
    $scope.analyticsFilters = []
    $scope.collectionsFilters = []
    $scope.eligibilityFilters = []
    $scope.engagementFilters = []
    $scope.messagingFilters = []
    $scope.paymentsFilters = []
    $scope.payrollFilters = []
    $scope.reviewsFilters = []
    $scope.treatmentFilters = []
    $scope.virtualTerminalFilters = []
    $scope.practiceAccessFilters = []
    $scope.regionAccessFilters = []
    
    $scope.practiceAccessOptions = [
        'Practices1',
        'Practices2',
        'Practices3',
        'Practices4',
        'Practices5'
    ]
    $scope.regionAccessOptions = [
        'Region1',
        'Region2',
        'Region3',
        'Region4',
        'Region5'
    ]
    $scope.practiceOptions = [
        'Practices1',
        'Practices2',
        'Practices3',
        'Practices4',
        'Practices5'
    ]
    $scope.regionOptions = [
        'Region1',
        'Region2',
        'Region3',
        'Region4',
        'Region5'
    ]
    $scope.analyticsOptions = [
        'Practice Dashboard',
        'Provider Dashboard',
        'Region Dashboard'
    ]
    $scope.collectionsOptions = [
        'Dashboard',
        'Collections'
    ]
    $scope.eligibilityOptions = [
        'Dashboard',
        'Pending',
        'Verify Patient',
        'View Insurance Breakdown'
    ]
    $scope.engagementOptions = [
        'Dashboard',
        'Confirmation Pending',
        'Confirmation Completed',
        'Hygiene Pending',
        'Hygiene Completed'
    ]
    $scope.messagingOptions = [
        'Inbox',
        'Mass SMS'
    ]
    $scope.paymentsOptions = [
        'Dashboard',
        'Pending',
        'Completed',
        'Create Payment',
        'Issue Refund',
        'Recurring',
        'Transactions'
    ]
    $scope.payrollOptions = [
        'Dashboard',
        'Payroll'
    ]
    $scope.reviewsOptions = [
        'Dashboard',
        'Write Response'
    ]
    $scope.treatmentOptions = [
        'Call List',
        'Pending',
        'Completed'
    ]
    $scope.virtualTerminalOptions = [
        'Virtual Terminal'
    ]

  

    $scope.selectAllTreeSelect = function (options, model) {
        let allOptionsArray = Object.getObjValue($scope, options);
        let allOptions = [].concat.apply([], allOptionsArray.map(el => el.options));
        let selectedOptions = Object.getObjValue($scope, model);
        let totalLength = 0
        allOptionsArray.forEach(el => {
            totalLength += el.options.length
        })

        if (allOptions.length == selectedOptions.length) {
            setObjValue($scope, [], model)
        } else {
            setObjValue($scope, [...allOptions], model)
        }
    }

    $scope.selectParentTreeSelect = function (options, model) {

        let selected = Object.getObjValue($scope, model);
        let alreadySelected = options.every(val => selected.includes(val));
        let newValues = []
        if (alreadySelected) {
            newValues = selected.filter(el => !options.includes(el))
            setObjValue($scope, [...newValues], model)

        } else {
            newValues = Array.from(new Set([...selected, ...options]))
            setObjValue($scope, newValues, model)
        }
    }

    $scope.isTreeselectAllChecked = function (options, model) {
        let allOptionsArray = Object.getObjValue($scope, options);
        let allOptions = [].concat.apply([], allOptionsArray.map(el => el.options));
        let selectedOptions = Object.getObjValue($scope, model);

        return allOptions.length == selectedOptions.length
    }

    $scope.isTreeselectParentChecked = function (options, model) {
        let selected = Object.getObjValue($scope, model);
        return options.every(val => selected.includes(val));
    }

    $scope.selectAllMultiSelect = function (optionsField, field) {
        let allOptions = Object.getObjValue($scope, optionsField);
        let selectedOptions = Object.getObjValue($scope, field);
        if (allOptions.length === selectedOptions.length) {
            setObjValue($scope, [], field)
        } else {
            setObjValue($scope, [...allOptions], field)
        }
    }

    $scope.selectAllMultiLevelSelect = function (optionsField, field) {
        let allOptions = Object.getObjValue($scope, optionsField);
        let selectedOptions = Object.getObjValue($scope, field);
        if (allOptions.length === selectedOptions.length) {
            setObjValue($scope, [], field)
        } else {
            setObjValue($scope, [...allOptions], field)
        }
    }

    $scope.toggleMultiSelect = function (model, value, ev) {

        let arr = Object.getObjValue($scope, model);
        if (arr.includes(value)) {
            arr.splice(arr.indexOf(value), 1);
        } else {
            pushObjValue($scope, value, model)
        }
    }

    $scope.isChecked = function (op = '', options, model) {
        if (op.toLowerCase() == 'all') {
            let selected = Object.getObjValue($scope, model);
            let allOptions = Object.getObjValue($scope, options);
            if (allOptions.length === selected.length) {
                return true
            } else {
                return false
            }
        } else {
            let selected = Object.getObjValue($scope, model);
            if (selected.includes(op)) {
                return true
            } else {
                return false
            }
        }
    }

    $scope.showThisWidget = function (name, model) {
        let selected = Object.getObjValue($scope, model);
        if (selected.includes(name)) {
            return true
        } else {
            return false
        }
    }

    //Utility
    function setObjValue(obj, value, path) {
        path = path.split('.');
        for (i = 0; i < path.length - 1; i++)
            obj = obj[path[i]];

        obj[path[i]] = value;
    }

    function pushObjValue(obj, value, path) {
        path = path.split('.');
        for (i = 0; i < path.length - 1; i++)
            obj = obj[path[i]];

        obj[path[i]].push(value);
    }

    Object.getObjValue = function (o, s) {
        s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        s = s.replace(/^\./, '');           // strip a leading dot
        var a = s.split('.');
        for (var i = 0, n = a.length; i < n; ++i) {
            var k = a[i];
            if (k in o) {
                o = o[k];
            } else {
                return;
            }
        }
        return o;
    }

})