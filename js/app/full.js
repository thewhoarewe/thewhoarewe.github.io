var whoAreWe = angular.module("whoAreWe", ['ngRoute']);

whoAreWe.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/news/:name', {
			templateUrl: function(attrs){
				return 'templates/views/' + attrs.name + '.html';
			}
		})
		.when('/test', {
			templateUrl: 'templates/views/test.html'
		}).
		when('/news', {
			templateUrl: 'templates/views/news.html'
		}).
		when('/contact', {
			templateUrl: 'templates/views/contact.html'
		}).
		otherwise({
			redirectTo: '/news'
		});
}]);


whoAreWe.directive("newsPost", function(){

	return {
		restrict: "E",
		templateUrl: function(element, attrs){
			return "/templates/news/" + attrs.name + ".html";
		}
	};

});

whoAreWe.directive("pageNav", function(){

	return {
		restrict: "E",
		templateUrl: "/templates/nav.html"
	};

});

whoAreWe.directive("footerNav", function(){

	return {
		restrict: "E",
		templateUrl: "/templates/footer.html"
	};

});


whoAreWe.directive("blueimpGallery", function(){

	return {
		restrict: 'E',
		templateUrl: '/templates/blueimp-gallery.html'
	};
});

var posts = [
	{
		gig: "cah-june15"
	},
	{
		gig: "bi-march15"
	},
];

whoAreWe.controller("postsController", function($scope){

	$scope.posts = posts;

});