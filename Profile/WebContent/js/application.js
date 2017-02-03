var profileApp = angular.module('profileMaintenance', []);

profileApp.controller('profileController', function ($scope){
	$scope.title = "Profile Maintenance";
	$scope.maintainProfileTitle = "";
	
	$scope.fName = "";
	$scope.lName = "";
	$scope.fld = "";
	$scope.rle = "";
	
	$scope.profiles = [{firstName : "Sridhar", lastName : "Karanam", field : "IT", role : "Developer"},
	                   {firstName : "John", lastName : "Doe", field : "IT", role : "Architect"},
	                   {firstName : "Virat", lastName : "Kohli", field : "Sports", role : "Cricketer"},
	                   {firstName : "Yuvraj", lastName : "Singh", field : "Sports", role : "Cricketer"},
	                   {firstName : "Jimmy", lastName : "Johns", field : "Food Service", role : "Chef"}
					  ];
	
	$scope.addProfile = function(){
		$scope.maintainProfileTitle = "Add Profile";
	}
	
	$scope.updateProfile = function(firstName, lastName, field, role){
		$scope.maintainProfileTitle = "Update Profile";
		$scope.fName = firstName;
		$scope.lName = lastName;
		$scope.fld = field;
		$scope.rle = role;
	}
	
	$scope.saveData = function(){
		if($scope.maintainProfileTitle == "Add Profile"){
			$scope.profiles.push({firstName : $scope.fName, lastName : $scope.lName, field : $scope.fld, role : $scope.rle});
			$scope.clearData();
		}else if($scope.maintainProfileTitle == "Update Profile"){
			$scope.clearData();
		}
	}
	
	$scope.clearData = function(){
		$scope.fName = "";
		$scope.lName = "";
		$scope.fld = "";
		$scope.rle = "";
		$scope.maintainProfileTitle = "";
	}
	
	$scope.closeModalDialog = function(){
		$scope.clearData();
	}
});