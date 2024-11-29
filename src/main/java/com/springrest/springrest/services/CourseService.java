package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.Course;

public interface CourseService {
	public List<Course>getCourses(); //loose Coupling

	public Course getCourse(long courseId); //due to Run Time Polymorphism impl getCourse will run

	public Course addCourse(Course course);
}
