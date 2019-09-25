const ScoreModel = require('./score.model');

class ScoreController {
  static async appendScore(ctx) {
    const { duration, uuid, level } = ctx.request.body;

    const result = await ScoreModel.create({
      duration,
      uuid,
      level
    });

    if (result) {
      return (ctx.body = {
        status: 'success',
        result: true
      });
    }
  }

  static async getRankingList(ctx) {
    const { level } = ctx.query;

    let topNumber = 20;

    const rankingList = await ScoreModel.find(
      {
        level
      },
      {
        __v: 0,
        _id: 0,
        createdAt: 0,
        updatedAt: 0
      }
    )
      .sort('duration')
      .limit(Number(topNumber));

    return (ctx.body = {
      status: 'success',
      result: {
        data: rankingList
      }
    });
  }
}

module.exports = ScoreController;
