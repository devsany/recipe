import React, { useEffect } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID =
  "568030050305-fj7e4qkef6rq0s7jblmb6fkukjs3iinn.apps.googleusercontent.com";
const API_KEY = "AIzaSyBOI5Qck_DHOGZ-P0tx7I-LWCl11cUjCCQ";
const SCOPES = "https://www.googleapis.com/oauth2/v1/certs";

const GoogleCalendar = () => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
        ],
        scope: SCOPES,
      });
    };

    gapi.load("client:auth2", initClient);
  }, []);

  const handleLogin = () => {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        console.log("User signed in");
      });
  };

  const createGoogleMeetEvent = () => {
    const event = {
      summary: "Google Meet Meeting",
      location: "Online",
      description: "A chance to talk with friends",
      start: {
        dateTime: "2024-10-10T10:00:00-07:00",
        timeZone: "America/Los_Angeles",
      },
      end: {
        dateTime: "2024-10-10T11:00:00-07:00",
        timeZone: "America/Los_Angeles",
      },
      attendees: [
        { email: "sunnyrajbodhgaya13@gmail.com" },
        { email: "sunnyrajbodhgaya19@gmail.com" },
      ],
      conferenceData: {
        createRequest: {
          requestId: "7qxalsvy0e",
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    };

    const request = gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: event,
      conferenceDataVersion: 1,
      sendUpdates: "all", // to send invitations to attendees
    });

    request.execute((event) => {
      console.log("Event created: ", event.htmlLink);
      console.log("Google Meet link: ", event.hangoutLink);
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Sign in with Google</button>
      <button onClick={createGoogleMeetEvent}>Create Google Meet Event</button>
    </div>
  );
};

export default GoogleCalendar;
