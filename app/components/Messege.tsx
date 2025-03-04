import { Card, CardHeader } from "@/components/ui/card";
import { Message as MessageType} from "ai";
import { Bot, User } from "lucide-react";

export default function Message({ message }: { message: MessageType }) {
    const { role, content } = message;
    if (role === "assistant") {
        return (
            <div className="flex flex-col gap-3 p-6 whitespace-pre-wrap">
                <div>
                    <Bot className="flex items-center justify-center" />
                    Assistant:
                </div>
                {content}
            </div>
        );
    }
    return (
        <Card className="whitespace-pre-wrap">
          <CardHeader>
            <div className="flex items-center gap-2">
              <User size={36} />
              {content}
            </div>
          </CardHeader>
        </Card>
      );    
}