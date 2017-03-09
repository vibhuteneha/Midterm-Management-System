angular.module('midtermApp', []).controller('midtermCtrl',function($scope){

$scope.groups = [{modulename:'Grunt', moduledes:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', students:['Neha'],tasks:[{taskdes:'Make presentation',stud:'', done:false}]}];

$scope.addGroup = function() {
	if($scope.modulename == null && $scope.moduledes == null)
	{
		alert('Enter Module name and description!');
		return;
	}
	else
	{
		$scope.groups.push({modulename:$scope.modulename, moduledes:$scope.moduledes, students:[] , tasks:[]});
		$scope.modulename = null;
		$scope.moduledes = null;
	}
};

$scope.addStudent = function() {
	if($scope.studentname == null)
	{
		alert('Enter Student name!');
		return;
	}
	else
	{
		angular.forEach($scope.groups, function(addstu) {

			if($scope.opt == addstu.modulename)
			{
				addstu.students.push($scope.studentname);
			}
		});
			
		$scope.studentname = null;
	}
	$scope.opt="";
};

$scope.addTask = function() {
	if($scope.taskdes == null)
	{
		alert('Enter Task description!');
		return;
	}
	else
	{
		angular.forEach($scope.groups, function(addtask) {
			if($scope.opt1 == addtask.modulename)
			{
				addtask.tasks.push({taskdes:$scope.taskdes, stud:''});
			}
		});
		$scope.taskdes = null;
	}	
	
	$scope.opt1 = "";
};

$scope.completedtasks = function(grp) {
      var count = 0;
      angular.forEach(grp.tasks, function(task) {
        count += task.done ? 1 : 0;
      });
      return count;
};
$scope.remainingtasks = function(grp) {
      var count = 0;
      angular.forEach(grp.tasks, function(task) {
        count += task.done ? 0 : 1;
      });
      return count;
};

$scope.removegrp = function(grp) { 
	var i = $scope.groups.indexOf(grp);
  $scope.groups.splice(i, 1);     
};

$scope.removestu = function(stu,grp) { 
	 var i = grp.students.indexOf(stu);
	 grp.students.splice(i,1);
};

$scope.removetask = function(task,grp) { 
	 var i = grp.tasks.indexOf(task);
	 grp.tasks.splice(i,1);
};
});