var app = angular.module('cashApp', []);
// new controller
app.controller('MainCtrl', ['$scope', function($scope) {
	// creating a variable in angular called posts
	// The $scope variable serves as the bridge between Angular controllers and Angular templates. If you want something to be accessible in the template such as a function or variable, bind it to $scope
	// add a function addPost
	$scope.posts=[];

	$scope.addPost = function(){
		if(!$scope.title || $scope.title === '') {return;}
		$scope.posts.push({
			date: $scope.date, 
			title: $scope.title, 
			amount: $scope.amount,
			total: $scope.total
		});
		$scope.date='';
		$scope.title='';
		$scope.amount='';
	};
	$scope.deletePost = function() {
	    $scope.posts.splice($scope.toRemove, 1);
	    $scope.toRemove = null;
	};
    $scope.total = function() {
    var total = 0;
    angular.forEach($scope.posts, function(post) {
        total += post.amount;
    })

    return total;
    };

}]);
