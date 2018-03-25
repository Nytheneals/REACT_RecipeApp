import React, { Component } from "react";

class Teacher extends Component {
  render() {
    const { teachers } = this.props;
    console.log(teachers);

    setTimeout(() => {
      const randomTeacher = Math.floor(Math.random() * teachers.length);
      console.log(randomTeacher);

      const randHobbie = Math.floor(
        Math.random() * teachers[randomTeacher].length
      );
      console.log(randHobbie);
    }, 1000);
    const teacher = teachers.map((teacher, index) => {
      return (
        <li key={index}>
          <h1> Name: {teacher.name}</h1>
          <h2> Hobbies</h2>
          <ul>
            {teacher.hobbies.map((hob, i) => {
              return <li key={i}>{hob}</li>;
            })}
          </ul>
        </li>
      );
    });
    return teacher;
  }
}

class Random extends Component {
  constructor() {
    super();

    this.state = {
      teachers: [
        {
          name: "Nathan",
          hobbies: ["Cooking", "Music"]
        },
        {
          name: "Haneals",
          hobbies: ["Drinking", "Snapping"]
        },
        {
          name: "Neals",
          hobbies: ["Biking", "Surfing"]
        },
        {
          name: "Thaneals",
          hobbies: ["Racing", "Gaming"]
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <ul>
          <Teacher teachers={this.state.teachers} />
        </ul>
      </div>
    );
  }
}

export default Random;
