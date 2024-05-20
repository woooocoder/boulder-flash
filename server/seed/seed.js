const bob = {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "examplepassword",
    "sessions": [
      {
        "stats": {
          "session_time": 90,
          "avg_difficulty": 6,
          "max_difficulty": 9,
          "total_climbs": 5,
          "num_completed": 3,
          "num_failed": 2,
          "completion_rate": 60
        },
        "title": "Session 1",
        "climbs": [
          {
            "title": "First Climb",
            "gym_rating": 8,
            "style": "Bouldering",
            "completed": true,
            "difficulty": 7,
            "description": "This is the first climb.",
            "video": "https://example.com/video1"
          },
          {
            "title": "Second Climb",
            "gym_rating": 7,
            "style": "Lead Climbing",
            "completed": false,
            "difficulty": 6,
            "description": "This is the second climb.",
            "video": "https://example.com/video2"
          }
        ],
        "date": "2024-04-18T12:00:00.000Z"
      },
      {
        "stats": {
          "session_time": 120,
          "avg_difficulty": 5,
          "max_difficulty": 8,
          "total_climbs": 7,
          "num_completed": 5,
          "num_failed": 2,
          "completion_rate": 71.4
        },
        "title": "Session 2",
        "climbs": [
          {
            "title": "Third Climb",
            "gym_rating": 6,
            "style": "Top Rope",
            "completed": true,
            "difficulty": 5,
            "description": "This is the third climb.",
            "video": "https://example.com/video3"
          },
          {
            "title": "Fourth Climb",
            "gym_rating": 8,
            "style": "Bouldering",
            "completed": true,
            "difficulty": 7,
            "description": "This is the fourth climb.",
            "video": "https://example.com/video4"
          },
          {
            "title": "Fifth Climb",
            "gym_rating": 6,
            "style": "Lead Climbing",
            "completed": true,
            "difficulty": 5,
            "description": "This is the fifth climb.",
            "video": "https://example.com/video5"
          }
        ],
        "date": "2024-04-17T12:00:00.000Z"
      },
      {
        "stats": {
          "session_time": 60,
          "avg_difficulty": 7,
          "max_difficulty": 10,
          "total_climbs": 3,
          "num_completed": 2,
          "num_failed": 1,
          "completion_rate": 66.7
        },
        "title": "Session 3",
        "climbs": [
          {
            "title": "Sixth Climb",
            "gym_rating": 9,
            "style": "Bouldering",
            "completed": true,
            "difficulty": 8,
            "description": "This is the sixth climb.",
            "video": "https://example.com/video6"
          },
          {
            "title": "Seventh Climb",
            "gym_rating": 8,
            "style": "Top Rope",
            "completed": false,
            "difficulty": 7,
            "description": "This is the seventh climb.",
            "video": "https://example.com/video7"
          }
        ],
        "date": "2024-04-16T12:00:00.000Z"
      }
    ]
  }
  
module.exports = bob