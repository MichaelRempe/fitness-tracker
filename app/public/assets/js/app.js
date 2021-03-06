$(document).ready(function(){

  // We're going to store some data here because we want to reference this
  // stuff multiple times, and this way we don't need to keep doing API calls
  let allWorkouts = [];
  let selectedWorkout = { activities: []};


  /** ********** DOM Population ********** */

  // Populate workout data
  // (If we're adding a new blank item to the list we will want to auto-select 
  // it, so that is handled in the params argument)
  function populateWorkouts(params){
    $("#workouts-list").empty();
    const ul = $("<ul>");
    allWorkouts.forEach( (workout, idx) => {
      console.log(workout);
      const li = $("<li>");
      li.addClass("workout-item");
      li.attr("data-workout-id", workout._id);
      li.attr("data-workout-idx", idx);
      li.html("<span>" + workout.day + "</span>" + workout.name);
      ul.append(li);
    });
    $("#workouts-list").append(ul);
    if( params && params.selectLatest === true ){
      $("#workouts-list li:last-child").addClass("selected");
    }
  }

  // Populate activity data for the selected workout
  function populateActivities(){
    $("#activities-list").empty();
    const ul = $("<ul>");
    selectedWorkout.activities.forEach( (activity, idx) => {
      const li = $("<li>");
      li.addClass("activity-item");
      li.attr("data-activity-idx", idx);

      if( activity._id )
        li.attr("data-activity-id", activity._id);
      
      let html = ` 
        <span>${activity.exercise}</span> <br/>
        Duration: ${activity.duration} <br/>
        Weight: ${activity.weight} <br/>
        Reps: ${activity.reps} <br/>
        Sets: ${activity.sets} <br/>
        Distance: ${activity.distance}
      `;

      li.append(html);
      ul.append(li);
    });
    $("#activities-list").append(ul);
  }


  /** ********* Event handlers ********* */
  
  //When someone clicks on a workout item, we'll populate the DOM with 
  // all activities for that workout. Note that because the workouts don't 
  // exist in the DOM when the page is loaded, we need to use the special
  // event selector.
  $("#workouts-list").on("click", ".workout-item", function(e){
    e.preventDefault();
    console.log("item clicked");
    console.log($(this));
    $("#workouts-list li").removeClass("selected");
    $(this).addClass("selected");
    const idx = $(this).attr("data-workout-idx");
    const id = $(this).attr("data-workout-id");
    selectedWorkout = allWorkouts[idx];
    $("div.right-column").show();
    populateActivities();
  });

  // Create a new empty workout for the user to work with
  $("button#add-workout").on("click", function(e){
    e.preventDefault();
    const dayString = moment().format("MMM DD, YYYY");
    const name = $("#workout-name").val().trim();
    selectedWorkout = { name: name, day: moment().format("MMM DD, YYYY"), activities: [] };
    allWorkouts.push(selectedWorkout);

    // Save to db via api
    saveSelectedWorkout();

    populateWorkouts({selectLatest: true});
    $("div.right-column").show();
  });

  // Adds an activity to the selected workout, then save via API
  $("button#add-activity").on("click", function(e){
    e.preventDefault();

    const activity = {
      exercise: $("#exercise").val(),
      duration: $("#duration").val().trim(),
      weight: $("#weight").val().trim(),
      reps: $("#reps").val().trim(),
      sets: $("#sets").val().trim(),
      distance: $("#distance").val().trim()
    };

    selectedWorkout.activities.push(activity);

    console.log(selectedWorkout.activities);

    // Save activity to the api
    saveActivity(activity);
    populateActivities();
  });


  /** ********** API Calls ******************* */

  // Retrive a JSON payload of all exercises
  function getExercises(){
    $.ajax({
      method: "GET",
      url: "/api/exercise"
    }).then( resp => {
      console.log(resp)
      // populate the select area
      resp.forEach( exercise => {
        const opt = $("<option>");
        opt.val(exercise.name);
        opt.text(exercise.name);
        $("select#exercise").append(opt);
      });

    })
  }

  // Retrieve a JSON payload of all workouts done so far
  function getWorkouts(){
    $.ajax({
      method: "GET",
      url: "/api/workout"
    }).then( resp => {
      console.log(resp)
      allWorkouts = resp;
      populateWorkouts();
    })
  }

  // Save the currently selected workout
  function saveSelectedWorkout(){
    $.ajax({
      method: "POST",
      url: "/api/workout",
      data: selectedWorkout
    }).then(function(resp){
      console.log(resp);
      if( resp && resp._id ){
        selectedWorkout._id = resp._id;
      }
    });
  }

  // Add an activity to the current workout being viewed.
  // Save the currently selected workout
  function saveActivity(activity){
    $.ajax({
      method: "POST",
      url: "/api/activity?workoutId=" + selectedWorkout._id,
      data: activity
    }).then(function(resp){
      console.log(resp);
    });
  }


  // Page-loading operations
  getExercises();
  getWorkouts();
});