/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iqWZMKnmf5F
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="bg-white p-8">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <Card className="bg-[#dc2626] text-white mt-8">
            <CardHeader>
              <CardTitle>言灵计划:嘴炮大作战</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold">AI驱动的演出派对游戏</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">@AgentLive</h3>
              <p className="text-sm">
                召唤师通过玩梗召唤独一无二的神奇生物“言灵”，让他们进行荒诞且热血有趣的嘴（hu）炮（xiang）战（tu）斗（cao）。和你的朋友一起，进行充满着想象力和创意的对决吧！
              </p>
            </CardContent>
            <CardFooter>
              <Link href="https://store.steampowered.com/app/2778820/_Speakrit/">
                <Button className="bg-white text-[#dc2626]">前往言灵计划</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="bg-[#34d399] text-white mt-8">
            <CardHeader>
              <CardTitle>哄哄模拟器</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold">一个哄女朋友的AI游戏</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">@王登科</h3>
              <p className="text-sm">
                哄哄模拟器基于AI技术，你需要使用语言技巧和沟通能力，在限定次数内让对方原谅你，这并不容易
              </p>
            </CardContent>
            <CardFooter>
              <Link href="https://hong.greatdk.com/">
                <Button className="bg-white text-[#34d399]">前往哄哄模拟器</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="bg-[#f59e0b] text-white mt-8">
            <CardHeader>
              <CardTitle>决战拜年之巅</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold">你能经受住AI七大姑八大姨的灵魂拷问吗？</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">@Chatmindai</h3>
              <p className="text-sm">
                快过年了，准备好面对亲戚的“灵魂拷问”了吗？
                就在不少人都为此犯愁之时，一款非常应景的大模型游戏突然蹿红，各种群里玩疯了。
              </p>
            </CardContent>
            <CardFooter>
              <Link href="https://qinqi.chatmindai.net/chat">
                <Button className="bg-white text-[#f59e0b]">前往决战拜年之巅</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="bg-[#7c3aed] text-white mt-8">
            <CardHeader>
              <CardTitle>Infinite-craft</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold">Craft Anything.</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">@Neal</h3>
              <p className="text-sm">Infinite craft, a game that crafts word. Just like doodle god.</p>
            </CardContent>
            <CardFooter>
              <Link href="#">
                <Button className="bg-white text-[#7c3aed]">Go to Infinite craft</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="bg-[#10b981] text-white mt-8">
            <CardHeader>
              <CardTitle>Magic Seeker</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold">create cards with AI</h2>
              <p className="text-sm mt-4">Discord game that players can build card with AI</p>
            </CardContent>
            <CardFooter>
              <Link href="https://discord.com/invite/ByH4muZG">
                <Button className="bg-white text-[#10b981]">Go to Magic Seeker</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="bg-[#ef4444] text-white mt-8">
            <CardHeader>
              <CardTitle>1001 nights</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold">这是一个AI原生游戏，其中语言的力量塑造了现实...</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">@Ada</h3>
              <p className="text-sm">
                这是一个AI原生游戏。在古老的波斯帝国中，扮演山鲁佐德，用魔法将语言化为现实！收集故事中的珍奇武器，向邪恶的国王复仇——世界的命运，由你改写！
              </p>
            </CardContent>
            <CardFooter>
              <Link href="https://store.steampowered.com/app/2542850/1001_Nights/">
                <Button className="bg-white text-[#ef4444]">Go to 1001 nights</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="bg-[#3b82f6] text-white mt-8">
            <CardHeader>
              <CardTitle>哎哟,恋爱怎么这么难!</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-3xl font-bold">AiU做的小游戏</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">@AiU</h3>
              <p className="text-sm">
                前男友最近经常给你发消息，想要跟你重归于好，保护自己，让他在不被激怒的情况下放弃对你的死缠烂打。
              </p>
            </CardContent>
            <CardFooter>
              <Link href="https://aiu.ai-topia.com/openinstall/game/list">
                <Button className="bg-white text-[#3b82f6]">前往:哎哟,恋爱怎么这么难</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

