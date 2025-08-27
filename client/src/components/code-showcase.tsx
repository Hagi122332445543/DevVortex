import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CodeShowcase() {
  const killBrickCode = `local KillBrick = script.Parent

KillBrick.Touched:Connect(function(hit)
    local humanoid = hit.Parent:FindFirstChildWhichIsA('Humanoid')
    if humanoid then
        humanoid.Health = 0
    end
end)`;

  const combatSystemCode = `local Players = game:GetService('Players')
local ReplicatedStorage = game:GetService('ReplicatedStorage')

-- Advanced Combat System
local function CreateCombo(player, comboType)
    local character = player.Character
    if not character then return end
    
    local humanoid = character:FindFirstChild('Humanoid')
    -- Combo logic here
end

-- DataStore Management
local DataStoreService = game:GetService('DataStoreService')
local playerData = DataStoreService:GetDataStore('PlayerData')`;

  const [copiedKill, setCopiedKill] = useState(false);
  const [copiedCombat, setCopiedCombat] = useState(false);

  const formatCode = (code: string) => {
    return code
      .replace(/(local|function|if|then|end|return)/g, '<span class="syntax-keyword">$1</span>')
      .replace(/('.*?')/g, '<span class="syntax-string">$1</span>')
      .replace(/(Connect|FindFirstChildWhichIsA|FindFirstChild|GetService|GetDataStore)/g, '<span class="syntax-function">$1</span>')
      .replace(/(--.*)/g, '<span class="syntax-comment">$1</span>')
      .replace(/(\b\d+\b)/g, '<span class="syntax-number">$1</span>');
  };

  const copyToClipboard = async (text: string, type: 'kill' | 'combat') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'kill') {
        setCopiedKill(true);
        setTimeout(() => setCopiedKill(false), 2000);
      } else {
        setCopiedCombat(true);
        setTimeout(() => setCopiedCombat(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text" data-testid="heading-code-examples">
          Code Examples
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Kill Brick Script */}
          <div className="code-block rounded-xl p-6 relative group" data-testid="code-block-kill-brick">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold" data-testid="heading-kill-brick">Kill Brick System</h3>
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary/20"
                  onClick={() => copyToClipboard(killBrickCode, 'kill')}
                  data-testid="copy-kill-brick"
                >
                  {copiedKill ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4 text-primary" />
                  )}
                </Button>
                <div className="w-6 h-6 bg-primary rounded text-white flex items-center justify-center text-sm font-bold">
                  L
                </div>
              </div>
            </div>
            <pre className="font-mono text-sm overflow-x-auto">
              <code dangerouslySetInnerHTML={{ __html: formatCode(killBrickCode) }} />
            </pre>
          </div>

          {/* Advanced Combat System */}
          <div className="code-block rounded-xl p-6 relative group" data-testid="code-block-combat-system">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold" data-testid="heading-combat-system">Combat System</h3>
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-secondary/20"
                  onClick={() => copyToClipboard(combatSystemCode, 'combat')}
                  data-testid="copy-combat-system"
                >
                  {copiedCombat ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4 text-secondary" />
                  )}
                </Button>
                <div className="w-6 h-6 bg-secondary rounded text-white flex items-center justify-center text-sm font-bold">
                  L
                </div>
              </div>
            </div>
            <pre className="font-mono text-sm overflow-x-auto">
              <code dangerouslySetInnerHTML={{ __html: formatCode(combatSystemCode) }} />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
