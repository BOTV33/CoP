module.exports.config = {
    name: "leave",
    version: "1.0.0",
    hasPermssion: 2,  // শুধুমাত্র admin-level ইউজার চালাতে পারবে
    credits: "rX Abdullah",
    description: "Make the bot leave the group",
    commandCategory: "System", // 🔑 এইটা না থাকলে load হবে না
    usages: "leave",
    cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
    const { threadID } = event;
    api.sendMessage("😅 আজ রোবট বলে বের হতে বলছেন 😔 আচ্ছা বের হয়ে যাচ্ছি 😔!", threadID, () => {
        api.removeUserFromGroup(api.getCurrentUserID(), threadID);
    });
};
