angular.module('BudgetTrackerApp').controller('BudgetTrackerController', function ($scope) {

    $scope.incomes = [];

    $scope.income = {};

    $scope.addIncome = function() {
        $scope.incomes.push($scope.income);

        $scope.income = {};

    };

    $scope.expenses = [];

    $scope.expense = {};

    $scope.addExpense = function () {
        $scope.expenses.push($scope.expense);

        $scope.expense = {};

    };
    $scope.totalIncome = function () {
        var total = 0;

        for (var i = 0; i < $scope.incomes.length; i++) {
            total += parseFloat($scope.incomes[i].amount);
        }

        return total;
    }
    $scope.totalExpense = function () {
        var total = 0;

        for (var i = 0; i < $scope.expenses.length; i++) {
            total += parseFloat($scope.expenses[i].amount);
        }
        return total;
    }

    $scope.leftAfterSpending = function () {
        return $scope.totalIncome() - $scope.totalExpense();
    }
    
});