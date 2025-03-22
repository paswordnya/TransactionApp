
import React, { useState } from 'react';
import { View, Text, Modal,TouchableOpacity } from 'react-native';
import {styles} from '@presentation/transaction/component/FilterModal.style';
import Icon from 'react-native-vector-icons/Ionicons';
import { filterOptions } from '@model/FilterMoedel';

type FilterModalProps = {
    visible: boolean;
    onClose: () => void;
    onSelectFilter: (filter: string) => void;
};

const FilterModal = ({ visible, onClose, onSelectFilter }: FilterModalProps) => {
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const handleSelect = (value: string) => {
      setSelectedFilter(value);
      onSelectFilter(value);
    };
   
    return (
        <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <TouchableOpacity onPress={onClose}>
                <Icon name="close" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.title}>Urutkan</Text>
              <View style={{ width: 24 }} />
            </View>
            {filterOptions.map((option) => (
              <TouchableOpacity key={option.value}  onPress={() => handleSelect(option.value)}>
                <View style={styles.rowSelection}>
                <Icon
                  name={selectedFilter === option.value ? 'radio-button-on' : 'radio-button-off'}
                  size={25}
                  color="#fe6550"
                />
                <Text style={styles.filterText}>{option.label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    );
  };

  export default FilterModal;