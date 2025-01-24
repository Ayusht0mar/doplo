import FeedbackModal from "../../components/feedback-modal";
import { db } from "../../lib/db";

type RoadmapItem = {
    title: string;
  };

const RoadmapPage = async () => {
  const inReview: RoadmapItem[] = await db.componentsRoadmap.findMany({
    where: { status: "IN_REVIEW" },
  });
  const inProgress: RoadmapItem[] = await db.componentsRoadmap.findMany({
    where: { status: "IN_PROGRESS" },
  });
  const completed: RoadmapItem[] = await db.componentsRoadmap.findMany({
    where: { status: "COMPLETED" },
  });
  const published: RoadmapItem[] = await db.componentsRoadmap.findMany({
    where: { status: "PUBLISHED" },
  });

  return (
    <div className="flex flex-col w-[94vw] max-w-7xl mx-auto min-h-svh gap-8 bg-[#0C0C0C] rounded-3xl border border-[#171717]">
      <div className="pt-12 lg:pt-24 px-4 lg:px-12 space-y-4">
        <h1 className="text-4xl font-bold">Roadmap</h1>
        <p className="text-[#C0C0C0] text-balance">
          You can use all the components with one command or you can just copy
          and paste components into your app. This hybrid approach allows you to
          build faster and on your own terms.
        </p>
        <FeedbackModal />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* In Review */}
          <div className="flex flex-col border border-[#202020] p-4 h-[400px] overflow-y-scroll no-scrollbar">
            <h2 className="text-orange-600 font-semibold bg-orange-600/10 border border-orange-600 py-1 px-2 w-fit rounded text-sm">
              In Review
            </h2>
            <ul className="mt-4 space-y-2">
              {inReview.map((item: RoadmapItem) => (
                <li
                  key={item.title}
                  className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold"
                >
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* In Progress */}
          <div className="border border-[#202020] p-4 h-[400px] overflow-y-scroll no-scrollbar">
            <h2 className="text-blue-600 font-semibold bg-blue-600/10 border border-blue-600 py-1 px-2 w-fit rounded text-sm">
              In Progress
            </h2>
            <ul className="mt-4 space-y-2">
              {inProgress.map((item: RoadmapItem) => (
                <li
                  key={item.title}
                  className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold"
                >
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Completed */}
          <div className="border border-[#202020] p-4 h-[400px] overflow-y-scroll no-scrollbar">
            <h2 className="text-green-600 font-semibold bg-green-600/10 border border-green-600 py-1 px-2 w-fit rounded text-sm">
              Completed
            </h2>
            <ul className="mt-4 space-y-2">
              {completed.map((item: RoadmapItem) => (
                <li
                  key={item.title}
                  className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold"
                >
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Published */}
          <div className="border border-[#202020] p-4 h-[400px] overflow-y-scroll no-scrollbar">
            <h2 className="text-purple-600 font-semibold bg-purple-600/10 border border-purple-600 py-1 px-2 w-fit rounded text-sm">
              Published
            </h2>
            <ul className="mt-4 space-y-2">
              {published.map((item: RoadmapItem) => (
                <li
                  key={item.title}
                  className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold"
                >
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
