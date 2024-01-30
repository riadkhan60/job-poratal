import { useContext } from 'react';
import { Context } from './JobsListProvider';

function useJobsListValues() {
  const values = useContext(Context);
  if (!values) throw new Error('can not use outside of authenticated context');
  return values;
}

export default useJobsListValues