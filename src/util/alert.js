import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Alert = {
  delete: async () => {
    return MySwal.fire({
      title: 'Você deseja apagar este item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'SIM',
      cancelButtonText: 'NÃO',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      focusCancel: true,
      reverseButtons: true,
    });
  },
};

export default Alert;
