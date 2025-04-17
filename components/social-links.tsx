import { Twitter, Linkedin, Github, Facebook } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://twitter.com/neuralcommand"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-indigo-300 transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={20} />
      </a>
      <a
        href="https://www.linkedin.com/company/neural-command-llc/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-indigo-300 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="https://github.com/neuralcommand"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-indigo-300 transition-colors"
        aria-label="GitHub"
      >
        <Github size={20} />
      </a>
      <a
        href="https://facebook.com/neuralcommand"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-indigo-300 transition-colors"
        aria-label="Facebook"
      >
        <Facebook size={20} />
      </a>
    </div>
  )
}
