import { differenceInHours } from "date-fns/differenceInHours";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import classes from "./TeamTimezones.module.scss";
import { formatInTimeZone, toDate, toZonedTime } from "date-fns-tz";
import React from "react";

const ticks = Array(12).fill(null);
const minutes = Array(60).fill(null);
const period = ["A", "P"];

const teamMembers = [
  {
    id: "1",
    name: "Sarah",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50",
    location: "Sydney, Australia",
    timezone: "Australia/Sydney",
  },
  {
    id: "2",
    name: "Ethan",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50",
    location: "San Francisco, USA",
    timezone: "America/Los_Angeles",
  },
  {
    id: "3",
    name: "Leo",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50",
    location: "Barcelona, Spain",
    timezone: "Europe/Madrid",
  },
  {
    id: "4",
    name: "Isabella",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50",
    location: "London, UK",
    timezone: "Europe/London",
  },
  {
    id: "5",
    name: "Himari",
    avatar: "https://images.unsplash.com/photo-1589525231707-f2de2428f59c?w=50",
    location: "Tokyo, Japan",
    timezone: "Asia/Tokyo",
  },
];

export default function TeamTimezones() {
  const [time, setTime] = React.useState(new Date());
  const [hoveredTeamMemberTimezone, setHoveredTeamMemberTimezone] =
    React.useState("");
  const hourHandRef = React.useRef<HTMLDivElement>(null);
  const minuteHandRef = React.useRef<HTMLDivElement>(null);
  const secondHandRef = React.useRef<HTMLDivElement>(null);
  const second = React.useRef((time.getSeconds() / 60) * 360);

  let interval: number | null = null;

  const setClock = (timezone: string) => {
    const date = toZonedTime(new Date(), timezone);

    setTime(date);

    const minuteDegree = (date.getMinutes() / 60) * 360;
    minuteHandRef.current!.style.transform = `translateX(-50%) rotate(${minuteDegree}deg) translateY(25px)`;

    const hourDegree = ((date.getHours() % 12) / 12) * 360;
    hourHandRef.current!.style.transform = `translateX(-50%) rotate(${hourDegree}deg) translateY(70px)`;
  };

  const updateClock = () => {
    const date = new Date();
    const minuteDegree = (date.getMinutes() / 60) * 360;
    const hourDegree = ((date.getHours() % 12) / 12) * 360;

    minuteHandRef.current!.style.transform = `translateX(-50%) rotate(${minuteDegree}deg) translateY(25px)`;
    secondHandRef.current!.style.transform = `translateX(-50%) rotate(${second.current}deg) translateY(15px)`;
    hourHandRef.current!.style.transform = `translateX(-50%) rotate(${hourDegree}deg) translateY(70px)`;

    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      const seconds = new Date().getSeconds();

      if (seconds === 0) {
        setTime(new Date());
        const minuteDegree = (new Date().getMinutes() / 60) * 360;
        minuteHandRef.current!.style.transform = `translateX(-50%) rotate(${minuteDegree}deg) translateY(25px)`;

        const hourDegree = ((new Date().getHours() % 12) / 12) * 360;
        hourHandRef.current!.style.transform = `translateX(-50%) rotate(${hourDegree}deg) translateY(70px)`;
      }
    }, 1000);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      second.current += 6;
      secondHandRef.current!.style.transform = `translateX(-50%) rotate(${second.current}deg) translateY(15px)`;
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    updateClock();

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  const onMouseOver = (timezone: string) => {
    if (interval) {
      clearInterval(interval);
    }
    setHoveredTeamMemberTimezone(timezone);
    setClock(timezone);
  };

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number,
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const generateArcPath = (
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
  ) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M",
      x,
      y,
      "L",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      "Z",
    ].join(" ");
  };

  const gradientPathD = React.useMemo(() => {
    if (!hoveredTeamMemberTimezone) return "";
    const date = new Date();
    const zoned = toZonedTime(date, hoveredTeamMemberTimezone);
    const userHourAngle = ((date.getHours() % 12) / 12) * 360;
    const teamMemberHourAngle = ((zoned.getHours() % 12) / 12) * 360;

    console.log({
      zoned: zoned.getHours(),
      date: date.getHours(),
    });

    if (zoned.getHours() % 12 < date.getHours() % 12) {
      console.log("here");
      return generateArcPath(170, 170, 165, teamMemberHourAngle, userHourAngle);
    }

    console.log("here-1");

    return generateArcPath(170, 170, 165, userHourAngle, teamMemberHourAngle);
  }, [hoveredTeamMemberTimezone]);

  return (
    <PageWrapper
      title="Team Timezones"
      inspirationUrl="https://x.com/KumailNanji/status/1821162391419093017"
    >
      <div className={classes["container"]}>
        <div className={classes["card"]}>
          <div className={classes["left-container"]}>
            <div className={classes["header"]}>
              <p className={classes["title"]}>Team</p>
              <div className={classes["online"]}>
                <div className={classes["online-indicator"]} />
                <p>5 online</p>
              </div>
            </div>

            <div className={classes["clock"]}>
              <svg
                className={classes["clock-gradient"]}
                width={340}
                height={340}
                viewBox="0 0 340 340"
              >
                <defs>
                  <linearGradient
                    id="gradientFill"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="rgba(0, 0, 0, 0.03)" />
                    <stop offset="100%" stopColor="rgba(0, 0, 0, 0.1)" />
                  </linearGradient>
                </defs>
                <path d={gradientPathD} fill="url(#gradientFill)" />
              </svg>
              <div className={classes["clock-time"]}>
                <div className={classes["clock-time-hours"]}>
                  {ticks.map((_, index) => {
                    const hourIndex =
                      time.getHours() === 0 ? 12 : time.getHours() % 12;

                    return (
                      <div
                        className={classes["clock-time-value"]}
                        key={index}
                        style={{
                          transform: `translateY(${(hourIndex - 1 - index) * -36}px)`,
                        }}
                      >
                        <p>{(index + 1).toString().padStart(2, "0")}</p>
                      </div>
                    );
                  })}
                </div>
                <p>:</p>
                <div className={classes["clock-time-hours"]}>
                  {minutes.map((_, index) => {
                    const minuteIndex = time.getMinutes() - 1;

                    return (
                      <div
                        className={classes["clock-time-value"]}
                        key={index}
                        style={{
                          transform: `translateY(${(minuteIndex - index) * -36}px)`,
                        }}
                      >
                        <p>{(index + 1).toString().padStart(2, "0")}</p>
                      </div>
                    );
                  })}
                </div>
                <div
                  className={classes["clock-time-hours"]}
                  style={{
                    width: 17,
                  }}
                >
                  {period.map((value, index) => {
                    const periodIndex = time.getHours() < 12 ? 0 : 1;
                    return (
                      <div
                        className={classes["clock-time-value"]}
                        key={index}
                        style={{
                          transform: `translateY(${(periodIndex - index) * -36}px)`,
                        }}
                      >
                        <p>{value}</p>
                      </div>
                    );
                  })}
                </div>
                <p>M</p>
              </div>
              <div className={classes["clock-center"]} />
              <div className={classes["clock-hour-hand"]} ref={hourHandRef} />
              <div
                className={classes["clock-minute-hand"]}
                ref={minuteHandRef}
              />
              <div className={classes["clock-second-hand"]} ref={secondHandRef}>
                <div />
              </div>
              {ticks.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={classes["clock-tick"]}
                    style={{
                      "--rotation": `${index * 30}deg`,
                      background: index % 3 === 0 ? "#686868" : "#A3A3A3",
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className={classes["right-container"]}>
            {teamMembers.map((teamMember) => {
              const date = toZonedTime(new Date(), teamMember.timezone);

              const timeDifference = differenceInHours(date, new Date());

              const color =
                timeDifference > 0
                  ? "#8FC39F"
                  : timeDifference < 0
                    ? "red"
                    : "#939393";

              return (
                <div
                  key={teamMember.id}
                  className={classes["team-member"]}
                  onMouseOver={() => onMouseOver(teamMember.timezone)}
                  onMouseLeave={() => {
                    setHoveredTeamMemberTimezone("");
                    setTime(new Date());
                    updateClock();
                  }}
                >
                  <img
                    src={teamMember.avatar}
                    alt={teamMember.name}
                    className={classes["avatar"]}
                  />
                  <div className={classes["details"]}>
                    <p className={classes["name"]}>{teamMember.name}</p>
                    <p className={classes["location"]}>{teamMember.location}</p>
                  </div>
                  <div className={classes["timezones"]}>
                    <p className={classes["current-time"]}>
                      {formatInTimeZone(
                        new Date(),
                        teamMember.timezone,
                        "h:mma",
                      )}
                    </p>
                    <p
                      className={classes["difference"]}
                      style={{
                        color,
                      }}
                    >
                      {timeDifference === 0
                        ? "No change"
                        : `${Math.abs(timeDifference) === 1 ? `${timeDifference < 0 ? "-" : "+"}1 hour` : `${timeDifference < 0 ? "" : "+"}${timeDifference} hours`}`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
