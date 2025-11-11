import api from "../config/axios";

export const LeaderboardEntryServices = {
  getLeaderboardEntries: () => {
    return api.get("/LeaderboardEntry");
  },
  createLeaderboardEntry: (entry: {
    name: string;
    score: number;
    date: string;
    time: number;
  }) => {
    return api.post("/LeaderboardEntry", entry);
  },
};
