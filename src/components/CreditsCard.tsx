
interface CardProps {
  credit: Movie.ICredit
}

export default function CreditsCard({ credit }: CardProps) {

  const creditUrl = import.meta.env.VITE_IMG

  return (
    <div className="shadow-md rounded-md min-w-[180px] md:w-[180px] p-2">
      <img className="mb-2 md:w-[180px] rounded-md" src={creditUrl + credit.profile_path} alt={credit.name} />
      <h3 className="font-bold">{credit.name}</h3>
      <span className="text-gray-500">{credit.character}</span>
    </div>
  );
}