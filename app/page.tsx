import Tabs, { TabsContent, TabsList, TabsTrigger } from "@/components/Tab";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold text-neutral-700">
        Hello Compositional
      </h1>
      <div>
        <Tabs
          defaultValue="basicTable"
          className="w-[400px] flex flex-col gap-6"
        >
          <TabsList className="flex gap-6">
            <TabsTrigger value="basicTable">
              <button className="bg-orange-400 text-white rounded-md py-1 px-4">
                Basic Table
              </button>
            </TabsTrigger>
            <TabsTrigger value="kanban">
              <button className="bg-orange-400 text-white rounded-md py-1 px-4">
                KanbanBoard
              </button>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="basicTable" className="flex flex-col gap-4">
            <h1 className="text-2xl text-neutral-700 font-bold">
              Here the awesome Content for a Table
            </h1>
            <p className="max-w-[500px] text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              fuga, numquam nisi placeat voluptate reiciendis iste explicabo
              debitis ducimus ut quidem? Ad quae voluptates nostrum laboriosam
              eius, explicabo doloremque repellat?
            </p>
          </TabsContent>
          <TabsContent value="kanban" className="flex flex-col gap-4">
            <h1 className="text-2xl text-neutral-700 font-bold">
              Kanban Boards are hard to build
            </h1>
            <p className="max-w-[500px] text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              fuga, numquam nisi placeat voluptate reiciendis iste explicabo
              debitis ducimus ut quidem? Ad quae voluptates nostrum laboriosam
              eius, explicabo doloremque repellat?
            </p>
            <p className="max-w-[500px] text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              fuga, numquam nisi placeat voluptate reiciendis iste explicabo
              debitis ducimus ut quidem? Ad quae voluptates nostrum laboriosam
              eius, explicabo doloremque repellat?
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
