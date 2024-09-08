/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eSKFgZlyC6L
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function PodcastCardList() {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl w-full mx-auto">
      <Card>
        <CardHeader className="p-0">
          <img src="/placeholder.svg" alt="Project" width="400" height="225" className="aspect-video object-cover" />
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-xl font-bold">Next.js App</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Created 2 days ago</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-0">
          <img src="/placeholder.svg" alt="Project" width="400" height="225" className="aspect-video object-cover" />
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-xl font-bold">SvelteKit Site</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Created 1 day ago</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-0">
          <img src="/placeholder.svg" alt="Project" width="400" height="225" className="aspect-video object-cover" />
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-xl font-bold">Vue 3 App</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Created 3 days ago</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-0">
          <img src="/placeholder.svg" alt="Project" width="400" height="225" className="aspect-video object-cover" />
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-xl font-bold">React Site</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Created 4 days ago</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-0">
          <img src="/placeholder.svg" alt="Project" width="400" height="225" className="aspect-video object-cover" />
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-xl font-bold">Next.js App</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Created 2 days ago</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-0">
          <img src="/placeholder.svg" alt="Project" width="400" height="225" className="aspect-video object-cover" />
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-xl font-bold">SvelteKit Site</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Created 1 day ago</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-0">
          <img src="/placeholder.svg" alt="Project" width="400" height="225" className="aspect-video object-cover" />
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-xl font-bold">Vue 3 App</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Created 3 days ago</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-0">
          <img src="/placeholder.svg" alt="Project" width="400" height="225" className="aspect-video object-cover" />
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-xl font-bold">React Site</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Created 4 days ago</div>
        </CardContent>
      </Card>
      
      
    </div>
  )
}