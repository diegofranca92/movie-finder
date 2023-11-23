
interface CardProps {
  credit: Movie.ICredit
}

export default function CreditsCard({ credit }: CardProps) {

  const creditUrl = import.meta.env.VITE_IMG

  return (
    <div className="shadow-md rounded-sm">
      <img className="mb-2" width={180} height={180} src={creditUrl + credit.profile_path} alt={credit.name} />
      <h3 className="font-bold">{credit.name}</h3>
      <span className="text-gray-500">{credit.character}</span>
    </div>
  );
}